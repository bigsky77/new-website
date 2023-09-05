import { useEffect } from 'react';

const Payments = () => {
  useEffect(() => {
    const script1 = document.createElement('script');
    script1.src = "https://telegram.org/js/telegram-web-app.js";
    document.head.appendChild(script1);

    const script2 = document.createElement('script');
    script2.async = true;
    script2.src = "https://js.stripe.com/v3/pricing-table.js";
    document.head.appendChild(script2);
  }, []);

  return (
    <div>
        <stripe-pricing-table pricing-table-id="prctbl_1NmvNYEPWZ5HDCnLYaFEe3OE"
          publishable-key="pk_live_51NcWRqEPWZ5HDCnLV2R8HCOy6BJaXVRkluJxEYIchiMZEYrertv4shd66r4YSccrcIZ6uc5x08YBvrEHkXKlAVaP00FtyX5eXw">
       </stripe-pricing-table>
  </div>
  );
};

export default Payments;
