import React from 'react'

const ContactInfo = () => {
  return (
    <div className="bg-[#6AC685] w-full md:w-1/3 p-8 text-white">
          <h2 className="text-2xl font-bold mb-6">اطلاعات تماس</h2>
          <p className="mb-8 text-blue-100">
            ما مشتاق شنیدن نظرات شما هستیم. با ما در ارتباط باشید.
          </p>

          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <span className="text-xl">📍</span>
              <p className="text-sm">تهران، میدان ونک، خیابان ملاصدرا</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-xl">📞</span>
              <p className="text-sm" dir="ltr">
                +98 21 1234 5678
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-xl">✉️</span>
              <p className="text-sm">support@shop.com</p>
            </div>
          </div>
        </div>
  )
}

export default ContactInfo