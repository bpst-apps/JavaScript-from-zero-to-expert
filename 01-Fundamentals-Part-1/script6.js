const hasDriversLicence = true;
const hasGoodVision = false;

console.log(hasDriversLicence && hasGoodVision);
console.log(hasDriversLicence || hasGoodVision);
console.log(!hasDriversLicence);

const shouldDrive = hasDriversLicence && hasGoodVision;
if (shouldDrive) console.log('Sarah is able to join');
else console.log('Someone else should drive ...');

const isTired = true;

console.log(hasDriversLicence || hasGoodVision || isTired);
console.log(hasDriversLicence && hasGoodVision && isTired);


if (hasDriversLicence && hasGoodVision && isTired) console.log('Sarah is able to join');
else console.log('Someone else should drive ...');

if (hasDriversLicence && hasGoodVision && !isTired) console.log('Sarah is able to join');
else console.log('Someone else should drive ...');