"use client";

export default function ContactForm() {
  function handleSubmit(formData: FormData) {
    const data = {
      name: formData.get("name"),
      phone: formData.get("phone"),
      email: formData.get("email"),
      details: formData.get("details"),
    };
    console.log("Form submitted:", data);
    alert("ההודעה נשלחה בהצלחה!");
  }

  return (
    <form action={handleSubmit} className="mt-4" dir="rtl">
      <div className="mb-3">
        <label htmlFor="name" className="block mb-1 font-bold">
          שם<span className="text-red-600">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full border border-gray-300 rounded px-2 py-1 text-right"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="phone" className="block mb-1 font-bold">
          טלפון
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          className="w-full border border-gray-300 rounded px-2 py-1 text-right"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="email" className="block mb-1 font-bold">
          מייל<span className="text-red-600">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full border border-gray-300 rounded px-2 py-1 text-right"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="details" className="block mb-1 font-bold">
          פרטים
        </label>
        <textarea
          id="details"
          name="details"
          rows={4}
          className="w-full border border-gray-300 rounded px-2 py-1 text-right"
        />
      </div>

      <button
        type="submit"
        className="bg-[#006a3e] text-white px-6 py-2 rounded hover:bg-[#005530] transition-colors"
      >
        שלח
      </button>
    </form>
  );
}
