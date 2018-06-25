var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, toAdd)
{
  return [toAdd, ...array]
}

function destructivelyAddElementToBeginningOfArray(array, toAdd)
{
  array.unshift(toAdd)
  return array
}

function addElementToEndOfArray(array, toAdd)
{
  return [...array, toAdd]
}

function destructivelyAddElementToEndOfArray(array, toAdd)
{
  array.push(toAdd)
  return array
}

function accessElementInArray(array, index)
{
  return array[index]
}

function destructivelyRemoveElementFromBeginningOfArray(array)
{
  return array.shift()
}

function removeElementFromBeginningOfArray(array)
{
  return array.slice(1);
}

function destructivelyRemoveElementFromEndOfArray(array)
{
  array.pop()
  return array
}*/
