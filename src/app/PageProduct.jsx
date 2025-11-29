import SpecificCard from "/pages/SpecificCard"; // or wherever your component is

export default function PageProduct({params}) {
  const { id } = params;

  // You can pass this id to your product detail component
  return (
    <div>
      <SpecificCard productId={id} />
    </div>
  );
}
