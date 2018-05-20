function myfunc(){
    paypal.Button.render({
        
        // Set your environment

        env: 'sandbox', // sandbox | production

        // Specify the style of the button

        style: {
            label: 'checkout',  // checkout | credit | pay | buynow | generic
            size:  'responsive', // small | medium | large | responsive
            shape: 'pill',   // pill | rect
            color: 'gold'   // gold | blue | silver | black
        },

        // PayPal Client IDs - replace with your own
        // Create a PayPal app: https://developer.paypal.com/developer/applications/create

        client: {
            sandbox:    'AbytJdUtJhGuxbI5xwo7MDOIOyniO1kGAMiTg1reZpRKy3fEv-89AFjkiVOqxy7XgjK6ydEKwtv1Revl',
            production: 'AZ114qQaiEi1Ha8qVTIhGKEGnCYba-ejwJf5uFlm2aBMjK3zNh2Il96pxwJ2183MjyXEhY4aEy39laT4'
        },


        // Wait for the PayPal button to be clicked

        payment: function(data, actions) {
            return actions.payment.create({
                payment: {
                    transactions: [
                        {
                            amount: { total: '0.01', currency: 'USD' }
                        }
                    ]
                }
            });
        },

        // Wait for the payment to be authorized by the customer

        onAuthorize: function(data, actions) {
            return actions.payment.execute().then(function() {
                window.alert('Payment Complete!');
            });
        }
    
    }, '#paypal-button-container');
}
 
