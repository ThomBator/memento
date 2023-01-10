
const Card = ({ image, selected, onClick}) => {

    return (
        <div className="card">
            <div className={selected && 'selected'}>
                <image alt="" src={image}/>
                <image alt="" className="card-back"
                src={'../../public/assets/fireship.png'}>

                </image>
            </div>
        </div>
    );
};

export default Card;
