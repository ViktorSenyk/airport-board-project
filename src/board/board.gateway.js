const baseUrl = 'https://api.iev.aero/api/flights';

export const getFlightsData = selectedDate =>
  fetch(`${baseUrl}/${selectedDate}`).then(res => {
    if (!res.ok) {
      throw new Error('SERVER ERROR');
    }
    return res.json();
  });
