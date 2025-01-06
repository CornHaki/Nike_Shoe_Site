// Select all sections with ID "collection" and class "collection1"
const collectionSections = document.querySelectorAll('#collection, .collection1');

// Loop through each section and apply the observer
collectionSections.forEach((section) => {
  const shoeImage = section.querySelector('.shoe-image'); // Select the shoe image within this section
  const shadow = section.querySelector('.shadow'); // Select the shadow within this section

  // Create an Intersection Observer
  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Add the animation when the section is in view
          shoeImage.style.animation = 'slideFromBottom 1s ease-out forwards';
          shadow.style.animation = 'slideFromBottom 1.5s ease-in-out forwards';
          // Disconnect the observer after animation is triggered
          observer.disconnect();
        }
      });
    },
    {
      threshold: 0.5, // Trigger when 50% of the section is visible
    }
  );

  // Observe the current section
  observer.observe(section);
});
