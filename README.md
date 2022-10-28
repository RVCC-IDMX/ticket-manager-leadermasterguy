# Ticket Manager

This project utilizes and extends the Event Emitter class in order to create a ticket manager mockup.

This app can send(emit) and recieve(listen) both 'buy' and 'error' events, and print colored text accordingly, in order to simulate the functions of a ticket manager.

Once a ticket is "bought", the manager will send a confirmation email, and store the purchase info in a database(done through text in the console).

![image1](https://user-images.githubusercontent.com/30780494/197384824-655608fd-48d1-40e0-b8f5-cad7bcf6ff1f.JPG)
<-- A ticket is purchased at price 20, with an email of 'test@email'
![image2](https://user-images.githubusercontent.com/30780494/197384862-7efc0619-60c3-4b2c-8f50-73ce7e722395.JPG)
^ This is what is printed out

If too many tickets are purchased(more than there are), an 'error' event is sent, which is then "handled" by the ticket manager
![image3](https://user-images.githubusercontent.com/30780494/197384869-9cdcff07-d58d-4ddd-b867-86d0ee1c7c05.JPG)
^ Error emitted when there are no more tickets
![image4](https://user-images.githubusercontent.com/30780494/197384888-744910ab-23eb-4f18-b63a-bd89236fa011.JPG)
<-- Where errors are recieved and parsed in the ticket manager

The final colored output, utilizing these features is this
![image5](https://user-images.githubusercontent.com/30780494/197384828-ad8bc9eb-7ede-4ba6-9293-58b4c89309a2.JPG)
