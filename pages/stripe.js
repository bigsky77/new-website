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
      <stripe-pricing-table pricing-table-id="prctbl_1NdFQhEPWZ5HDCnLLK75AMl0"
        publishable-key="pk_test_51NcWRqEPWZ5HDCnLhSxOw2tvw6Va9NUlUZe1V9CcfEfvzaZWGfP14biFalXEujs0N8s5g3d9ITUuW7uKNlcULwV500VymMKaJD">
      </stripe-pricing-table>
    </div>
  );
};

export default Payments;
