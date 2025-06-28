const ProductCard = ({ image, title }) => {
  return (
    <div className="product-card">
      <div>
        <img src={image} alt={title} />
        <span>{title}</span>
      </div>
    </div>
  );
};

export default ProductCard;
