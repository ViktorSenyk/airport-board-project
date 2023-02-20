const initialState = {
  footerLinksData: [
    {
      id: 1,
      generalTitle: 'For passengers',
      links: [
        { title: 'Flight schedule', href: './' },
        { title: 'Services', href: './' },
        { title: 'Contacts', href: './' },
        { title: 'Privacy policy', href: './' },
        { title: 'Feedback form', href: './' },
      ],
    },
    {
      id: 2,
      generalTitle: 'Corporate',
      links: [
        { title: 'Main page', href: './' },
        { title: 'Ground Handling', href: './' },
        { title: 'Airport characteristics', href: './' },
        { title: 'Education Center', href: './' },
        { title: 'Careers', href: './' },
      ],
    },
    {
      id: 3,
      generalTitle: 'Press centre',
      links: [
        { title: 'Main page', href: './' },
        { title: 'Latest news', href: './' },
        { title: 'Social & Art Projects', href: './' },
        { title: 'Financial reports', href: './' },
        { title: 'Traffic statistics', href: './' },
      ],
    },
  ],
};

const footerReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default footerReducer;
