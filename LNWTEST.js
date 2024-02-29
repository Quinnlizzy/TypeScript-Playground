// You are given an m x n integer grid accounts where accounts[i][j] is the amount of money the ith customer has in the jth bank.


// The richest customer is the customer that has the maximum wealth, wealth is defined as the sum of money in all the banks combined
// Return the wealth that the richest customer has.

// Write a function that receives an amounts grid and returns the wealth of the richest customer.


// Example
// Input: accounts = [[1,2,3],[3,2,1],[1,1,2]]
// Output: 6

// Explanation:
// 1st customer has wealth = 1 + 2 + 3 = 6
// 2nd customer has wealth = 3 + 2 + 1 = 6
// 3rd customer has wealth = 1 + 1 + 2 = 4
// First two customers are considered the richest with a wealth of 6 each, so return 6.



//function to find highest value customer - outputs the value
function richestCustomer (){
    let maxCustomerValue = 0;
      for (i = 0; i < accounts.length; i++)
      let customerValue = 0;
      for (j = 0; j < accounts[i].length; j++){
        customerValue += accounts[i][j]
          }
      if (customerValue < maxCustomerValue){
        maxCustomerValue = customerValue
        }
    return maxCustomerValue
  }
  //loop through through the whole array
  //add up the values of each indivual array
  //output the value of the array with the highest value