var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, toAdd)
{
  return [toAdd, ...array]

}

function destructivelyAddElementToBeginningOfArray(array, toAdd)
{
  return array.unshift(toAdd)
}

function addElementToEndOfArray(array, toAdd)
{
  return [...array, toAdd]
}

function destructivelyAddElementToEndOfArray(array, toAdd)
{
  return array.push(toAdd)
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
