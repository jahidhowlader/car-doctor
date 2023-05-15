const Facility = ({service}) => {

    const {name, details} = service

    return (
        <div className=" p-10 rounded-lg border-t-root border-t-2 bg-form-bg">
            <h4 className="font-bold text-xl">{name}</h4>
            <p className="leading-8 opacity-80">{details}</p>
        </div>
    );
};

export default Facility;