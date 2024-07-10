## Thali Order app for restaurants.

You need to build a thali ordering app. The user can customize the content of Thali. We can add or remove following items and change the quality of these items (you can add more items  in the menu):

- Chapati
- Pickle 
- Curd
- Sweet
- Daal
- Paneer Dish

It is not mandatory to have all items in thali, but atleast two items should be present else you need to populate error message at the time of clicking checkout button. Each item have need to have a unit price and quantity .

When the user is done building the thali, they proceed to checkout page by clicking on checkout button, where they can view the items wise price and the total price of the thali and user should able to change the quantity.

While creating the project structure , you need to have following components in your app:

Thali.js - This will contain the UI of the ingradients added to the thali. for example if you have added pickle and curd, you need to diplay the picture of curd and pickle top of your page. if you remove pickle , the pickle image should not be displayed.  


Checkout.js - This component will have the checkout summary of your thali and the final price.

You need to store the ingradients and thier quantity using redux store. 

you have use createBrowserRouter  routes between pages



"# Thali-App-Mini-Project" 
