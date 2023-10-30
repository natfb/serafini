const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ 
            behavior: "smooth",
            block: "center"
        });
    }
};

export default scrollToSection;