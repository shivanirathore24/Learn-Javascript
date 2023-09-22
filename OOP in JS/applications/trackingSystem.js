/*
TRACKING SYSTEM
You have been hired to develop a tracking system for a logistics company. The system should allow the company to keep 
track of the location and status of each shipment, as well as assign resources to each shipment as needed.

Objective:
Create a constructor function called Shipment with properties such as
*Note: All the properties should be assigned with the values at the time of the object creation
id: a string representing the shipment ID
location: string representing the location of shipment
destination: string representing destination for the shipment
status : string representing the status of the shipment
resources : an array containing all the resources that have been assigned to the shipment

Using the prototype of the Shipment constructor function, add the following methods 
updateStatusandResources : should take status and resources as arguments and update the status and resource 
property of the object.
assignResources : This method should be able to push the arguments passed to the resource array.
(Note: the number of arguments passed by the user is not defined. It can be any number of arguments)

Create an object called TrackingSystem using an object literal that has the following:
shipments(property): representing an array of shipment object
updateStatus(method) : It should take two parameters, id and status, and should be able to change the status of the 
object using the id of the object.(Hint: You can use various array methods to iterate over the array)
viewShipment(method) : It should take id as a parameter and should display the details of that shipment like id, status, 
resources, location, and destination. ** use the concept of destructuring in viewShipment() method to display 
all the properties.

Usage:
const shipment1 = new Shipment("12345", "New York", "Los Angeles", "En route", ["Driver", "Truck"]);
shipment1.updateStatusAndResources("Delayed", ["Forklift"]);
shipment1.assignResources("Worker", "Pallets");
const shipment2 = new Shipment("67890", "Chicago", "Miami", "In transit", ["Forklift"]);
shipment2.updateStatusAndResources("In transit", ["Driver"]);
TrackingSystem.shipments.push(shipment1, shipment2);
TrackingSystem.updateStatus("12345", "Delivered");
TrackingSystem.viewShipment("12345");

Expacted Output:
Shipment ID: 12345
Status: Delivered
Resources: Forklift, Worker, Pallets
Location: New York
Destination: Los Angeles
*/

function main() {
  function Shipment(id, location, destination, status, resources) {
    this.id = id;
    this.location = location;
    this.destination = destination;
    this.status = status;
    this.resources = resources || [];
  }

  Shipment.prototype.updateStatusAndResources = function (newStatus,newResources) {
    this.status = newStatus;
    this.resources = newResources;
  };

  Shipment.prototype.assignResources = function (...assignedResources) {
    this.resources.push(...assignedResources);
  };

  const TrackingSystem = {
    shipments: [],

    updateStatus: function (id, newStatus) {
      const shipment = this.shipments.find((shipment) => shipment.id === id);
      if (shipment) {
        shipment.status = newStatus;
      }
    },

    viewShipment: function (id) {
      const shipment = this.shipments.find((shipment) => shipment.id === id);
      if (shipment) {
        const {id: shipmentId, status, resources, location, destination} = shipment;
        console.log(`
          Shipment ID: ${shipmentId}
          Status: ${status}
          Resources: ${resources.join(", ")}
          Location: ${location}
          Destination: ${destination}
        `);
      }else {
        console.log(`Shipment with ID ${shipmentId} not found.`);
    }
    },
  };

  return { Shipment, TrackingSystem };
}


const { Shipment, TrackingSystem } = main();

const shipment1 = new Shipment("12345", "New York", "Los Angeles", "En route", ["Driver", "Truck"]);
shipment1.updateStatusAndResources("Delayed", ["Forklift"]);
shipment1.assignResources("Worker", "Pallets");

const shipment2 = new Shipment("67890", "Chicago", "Miami", "In transit", ["Forklift"]);
shipment2.updateStatusAndResources("In transit", ["Driver"]);

TrackingSystem.shipments.push(shipment1, shipment2);
TrackingSystem.updateStatus("12345", "Delivered");
TrackingSystem.viewShipment("12345");
// Shipment ID: 12345
// Status: Delivered
// Resources: Forklift, Worker, Pallets
// Location: New York
// Destination: Los Angeles
