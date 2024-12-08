import React from 'react';
import { InlineWidget } from 'react-calendly';
import { CALENDLY_URL } from '../../config/constants';

const CalendlyWidget = () => {
  return (
    <div className="w-full h-[650px] rounded-lg overflow-hidden">
      <InlineWidget
        url={CALENDLY_URL}
        styles={{
          height: '100%',
          width: '100%',
        }}
        prefill={{
          email: "",
          firstName: "",
          lastName: "",
          name: "",
        }}
      />
    </div>
  );
};

export default CalendlyWidget;