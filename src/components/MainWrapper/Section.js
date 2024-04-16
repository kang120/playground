const Section = ({ id, children }) => {
    return (
        <div id={id} className="pt-20">
            {children}
        </div>
    );
};

export default Section;
