let month = "june";

switch (month.toLowerCase()) {
  case "january":
  case "march":
  case "may":
  case "july":
  case "august":
  case "october":
  case "december":
    console.log(`${month} has 31 days.`);
    break;
  case "february":
    console.log(`${month} has 28 days.`);
    break;
  case "april":
  case "june":
  case "september":
  case "november":
    console.log(`${month} has 30 days.`);
    break;
  default:
    console.log("invalid");
    break;
}
