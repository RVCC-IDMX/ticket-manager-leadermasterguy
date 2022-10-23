# Ticket Manager

This project utilizes and extends the Event Emitter class in order to create a ticket manager mockup.

This app can send(emit) and recieve(listen) both 'buy' and 'error' events, and print colored text accordingly, in order to simulate the functions of a ticket manager.

Once a ticket is "bought", the manager will send a confirmation email, and store the purchase info in a database(done through text in the console).
INSERT IMAGE1
explanation

INSERT IMAGE2
explanation

If too many tickets are purchased(more than there are), an 'error' event is sent, which is then "handled" by the ticket manager
INSERT IMAGE3
explanation
INSERT IMAGE4
explanation

The final colored output, utilizing these features is this
IMAGE5
