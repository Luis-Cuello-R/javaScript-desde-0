// Sample data

// const winningParticipants = [
//     { id: 1, name: 'Jennifer', ticketNumber: 001 },
//     { id: 8, name: 'Michael', ticketNumber: 008 },
//     { id: 15, name: 'Emily', ticketNumber: 015 },
//     { id: 47, name: 'Charlie', ticketNumber: 047 }
//   ]
  
//   function isAWinner(searchParam) {
//     // Search depending the input
//     if (typeof searchParam == "string") {
//       return winningParticipants.find((winnerObject) => winnerObject.name == searchParam) || "This is not a winning user/ticket";
//     } else if (typeof searchParam == "number") {
//       return winningParticipants.find((winnerObject) => (winnerObject.ticketNumber == searchParam) || (winnerObject.id == searchParam) ) || "This is not a winning user/ticket";
//     } else {
//       return "An invalid search parameter was given, please try again."
//     }
//   }
  
//   console.log(isAWinner(47));