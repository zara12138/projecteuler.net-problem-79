// insert items into an array at a specific index
const insert = (array: string[], index: number, ...items: string[]) => {
  array.splice(index, 0, ...items);
};

// swap two items in an array
const swap = (array: string[], item1: string, item2: string) => {
  const item1Index = array.indexOf(item1);
  const item2Index = array.indexOf(item2);
  array.splice(item1Index, 1, item2);
  array.splice(item2Index, 1, item1);
};

export const getShortestPassword = (data: string[]) => {
  const shortestPassword: string[] = [];

  // remove duplicates
  // @ts-ignore
  const filteredData = [...new Set(data)];
  filteredData.map((item) => {
    const [first, second, third] = item.split("");
    const firstDigitIndexInPassword = shortestPassword.indexOf(first);
    const secondDigitIndexInPassword = shortestPassword.indexOf(second);
    const thirdDigitIndexInPassword = shortestPassword.indexOf(third);

    // switch on whether the three digits are in the password
    switch (
      [
        firstDigitIndexInPassword,
        secondDigitIndexInPassword,
        thirdDigitIndexInPassword,
      ].filter((index) => index !== -1).length
    ) {
      // if none of the digits are in the password
      case 0:
        shortestPassword.push(first, second, third);
        break;
      // if one of the digits is in the password
      case 1:
        if (firstDigitIndexInPassword !== -1) {
        // if the first digit is in the password
        // add the other two digits after the first digit
        insert(
            shortestPassword,
            firstDigitIndexInPassword + 1,
            second,
            third
          );
        } else if (secondDigitIndexInPassword !== -1) {
          // if the second digit is in the password
          // add the third digit after the second digit
          insert(shortestPassword, secondDigitIndexInPassword + 1, third);
          // add the first digit before the second digit
          insert(shortestPassword, secondDigitIndexInPassword, first);
        } else {
          // if the third digit is in the password
          // add the first and second digits before the third digit
          insert(shortestPassword, thirdDigitIndexInPassword, first, second);
        }
        break;
      // if two of the digits are in the password
      case 2:
        if (firstDigitIndexInPassword === -1) {
          // if the first digit is not in the password
          // add it before the second digit
          insert(shortestPassword, secondDigitIndexInPassword, first);
        } else if (secondDigitIndexInPassword === -1) {
          // if the second digit is not in the password
          // add it after the first digit
          insert(shortestPassword, firstDigitIndexInPassword + 1, second);
        } else {
          // if the third digit is not in the password
          // add it at the end
          shortestPassword.push(third);
        }
        break;
      // if all three digits are in the password
      // adjust the order accordingly
      case 3:
        if (firstDigitIndexInPassword > secondDigitIndexInPassword) {
          swap(shortestPassword, first, second);
        }
        if (secondDigitIndexInPassword > thirdDigitIndexInPassword) {
          swap(shortestPassword, second, third);
        }
        break;
    }
  });

  return shortestPassword.join("");
};
