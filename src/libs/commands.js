/**
 * This file contains all the options for the command line arguments
 */

const sortParameters = [
  "Bucket_Name",
  "Location",
  "Creation_Date",
  "Total_Size",
  "File_Count",
  "Last_Modified"
];

const bucketOption = {
  describe: 'The bucket\'s name',
  alias: 'b'
},
sortOptions = {
  describe: `Sorts the detailed list by the specified parameter`,
  alias: 's',
  choices: sortParameters
},
orderOptions = {
  describe: 'Orders the detailed list either ascendingly or descendingly',
  choices: ["asc", "desc"],
  alias: 'o'
},
startOptions = {
  describe: 'Start date for the cost command',
  alias: 'st'
},
endOptions = {
  describe: 'End date for the cost command',
  alias: 'e'
},
filterOptions = {
  describe: 'Filters the detailed list by specified parameter (can be a RegExp)',
  alias: 'f'
},
storageOptions = {
  describe: 'Storage type of objects to show. Defaults to "ALL".',
  choices: ["ALL", "STANDARD", "STANDARD_IA", "REDUCED_REDUNDANCY", "GLACIER", "ONEZONE_IA"],
  alias: ['t', 'type']
},
regionOptions = {
  describe: 'The AWS region which you want to see information for.',
  alias: 'r'
};

module.exports = {
  bucketOption,
  sortOptions,
  orderOptions,
  startOptions,
  endOptions,
  filterOptions,
  storageOptions,
  regionOptions
};