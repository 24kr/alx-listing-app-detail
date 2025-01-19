import React from "react";
import { PROPERTYLISTINGSAMPLE } from "@/constants";
import Image from "next/image";

const Listings: React.FC = () => {
  return (
    <section className="py-8">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-6">Available Properties</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROPERTYLISTINGSAMPLE.map((property, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <Image
                src={property.image}
                alt={property.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold">{property.name}</h3>
                <p className="text-gray-600">
                  {property.address.city}, {property.address.state},{" "}
                  {property.address.country}
                </p>
                <p className="text-sm text-gray-500">Rating: {property.rating}</p>
                <p className="text-sm text-gray-500">
                  Category: {property.category.join(", ")}
                </p>
                <p className="text-lg text-gray-800 font-semibold">
                  Price: ${property.price}
                </p>
                <p className="text-sm text-gray-500">
                  Offers: {property.offers.bed} Beds, {property.offers.shower}{" "}
                  Showers, Occupants: {property.offers.occupants}
                </p>
                {property.discount && (
                  <p className="text-sm text-green-500">
                    Discount: {property.discount}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Listings;