// Sleep Debt Calculator Function
function calculateSleepDebt(actualSleep, idealSleep) {
    // Calculate daily sleep debt
    const sleepDebt = idealSleep - actualSleep;
  
    if (sleepDebt <= 0) {
      return "You're getting enough sleep. No sleep debt!";
    } else {
      return `You have a sleep debt of ${sleepDebt} hours. Get some rest!`;
    }
  }
  
  // Example Usage
  const idealSleepPerNight = 8; // Recommended hours of sleep per night
  const actualSleepPerNight = 6; // Actual hours of sleep per night
  
  const result = calculateSleepDebt(actualSleepPerNight, idealSleepPerNight);
  console.log(result);
  