import React from "react";

const MembershipPlans = () => {
  const plans = [
    {
      name: "Basic Plan",
      price: "$29/month",
      features: ["Access to gym", "Locker facility"],
    },
    {
      name: "Premium Plan",
      price: "$49/month",
      features: [
        "Access to gym",
        "Locker facility",
        "Group classes",
        "Swimming pool access",
      ],
    },
    {
      name: "Elite Plan",
      price: "$79/month",
      features: [
        "Access to gym",
        "Locker facility",
        "Group classes",
        "Swimming pool access",
        "Personal trainer",
      ],
    },
  ];

  return (
    <section className="py-5" id="membership">
      <div className="container text-center">
        <h2 className="mb-4">Membership Plans</h2>
        <div className="row">
          {plans.map((plan, index) => (
            <div className="col-md-4" key={index}>
              <div className="card shadow p-4">
                <h4 className="card-title">{plan.name}</h4>
                <h5 className="text-primary">{plan.price}</h5>
                <ul className="list-unstyled mt-3">
                  {plan.features.map((feature, i) => (
                    <li key={i}>• {feature}</li>
                  ))}
                </ul>
                <a href="#!" className="btn btn-outline-primary mt-3">
                  Join Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MembershipPlans;
