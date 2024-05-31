//Create PowerpuffGirl object
function PowerpuffGirl (name, color, superpower) {
    this.name = name;
    this.color = color;
    this.superpower = superpower;
    this.isLeader = false;
    //Method for show a description personage's
    this.displayInfo = function () {
        console.log(`
        ------------------------------ 
         Powerpuff Girl Information:
         ****************************
         Name: ${this.name},
         Color: ${this.color},
         Superpower: ${this.superpower},
         ${this.isLeader ? 'Leader: Yes' : 'Leader: No'}
        ------------------------------
        `)
    }
    //Method for convert in a leader to some personage
    this.becomeLeader = function () {
        this.isLeader = true;
        console.log(`${this.name} has become the leader of the Powerpuff Girls !`)
    }
}
const blossom = new PowerpuffGirl('Blossom', 'Pink', 'Ice Breath');
const buttercup = new PowerpuffGirl('Buttercup', 'Green', 'Super Strength');
const bubbles = new PowerpuffGirl('Bubbles', 'Blue', 'Flight');

blossom.becomeLeader();
blossom.displayInfo();
buttercup.displayInfo();
bubbles.displayInfo();

/* Blossom has become the leader of the Powerpuff Girls !

        ------------------------------
         Powerpuff Girl Information:
         ****************************
         Name: Blossom,
         Color: Pink,
         Superpower: Ice Breath,
         Leader: Yes
        ------------------------------
        ------------------------------
         Powerpuff Girl Information:
         ****************************
         Name: Buttercup,
         Color: Green,
         Superpower: Super Strenght,
         Leader: No
        ------------------------------

        ------------------------------
         Powerpuff Girl Information:
         ****************************
         Name: Bubbles,
         Color: Blue,
         Superpower: Flight,
         Leader: No
        -----------------------------*/