import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {
  const priceOptions = [
    {
      "id": 1,
      "name": "Basic Plan",
      "price": 20,
      "features": [
        "Access to gym equipment",
        "Locker facility",
        "Open during regular hours"
      ]
    },
    {
      "id": 2,
      "name": "Standard Plan",
      "price": 40,
      "features": [
        "Access to gym equipment",
        "Locker facility",
        "Access to group fitness classes",
        "Extended hours"
      ]
    },
    {
      "id": 3,
      "name": "Premium Plan",
      "price": 60,
      "features": [
        "Access to gym equipment",
        "Locker facility",
        "Unlimited group fitness classes",
        "Personal trainer support",
        "Access to sauna and spa",
        "24/7 access"
      ]
    },
    {
      "id": 4,
      "name": "Family Plan",
      "price": 100,
      "features": [
        "Access for up to 4 family members",
        "Access to gym equipment",
        "Locker facility",
        "Family group fitness classes",
        "Childcare services during workouts"
      ]
    },
    {
      "id": 5,
      "name": "Student Plan",
      "price": 25,
      "features": [
        "Access to gym equipment",
        "Locker facility",
        "Discounted group classes",
        "Flexible hours to suit student schedules"
      ]
    }
  ];

  return (
    <div className="p-5 container mx-auto">
      <h2 className="text-5xl font-bold mb-10">Best Prices in town</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6" >
        {
          priceOptions.map(option => <PriceOption option={option} key={option.id}></PriceOption>)
        }
      </div>
    </div>
  );
};

export default PriceOptions;