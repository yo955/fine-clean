import React from "react";
import { FaBroom, FaSnowflake, FaBug, FaWater, FaGem } from "react-icons/fa";

const services = [
    {
        icon: <FaBroom className="text-white text-3xl" />,
        title: "خدمات النظافة العامة",
        items: [
            "تنظيف المباني، الفلل، الشقق، العمائر، المكاتب، المعارض، والقاعات.",
            "غسيل وتلميع الأرضيات: الرخام، الجرانيت، السيراميك، والبلاط.",
            "تنظيف السجاد، الموكيت، الكنب، المجالس، الستائر، والشبابيك.",
            "تنظيف الواجهات الزجاجية والجرانيت."
        ]
    },
    {
        icon: <FaSnowflake className="text-white text-3xl" />,
        title: "خدمات المكيفات",
        items: [
            "صيانة وغسيل مكيفات السبليت والمكيفات المركزية.",
            "تنظيف وحدات المكيف الداخلية والخارجية.",
            "معالجة الروائح وتحسين كفاءة التبريد."
        ]
    },
    {
        icon: <FaBug className="text-white text-3xl" />,
        title: "خدمات التعقيم والمكافحة",
        items: [
            "رش المبيدات ومكافحة الحشرات والقوارض.",
            "تعقيم المنازل، المكاتب، المدارس، المستشفيات، والفنادق."
        ]
    },
    {
        icon: <FaGem className="text-white text-3xl" />,
        title: "خدمات الجلي والتلميع",
        items: [
            "جلي وتلميع الرخام لإعادة اللمعان الطبيعي.",
            "تلميع الجرانيت وإزالة الخدوش والبقع.",
            "غسيل وصقل السيراميك والبلاط.",
            "معالجة الأرضيات الباهتة وإعادة بريقها."
        ]
    },
    {
        icon: <FaWater className="text-white text-3xl" />,
        title: "خدمات العزل والنقل",
        items: [
            "عزل وصيانة الخزانات الأرضية والعلوية.",
            "نقل الأثاث داخل وخارج مكة باحترافية وأمان."
        ]
    },
];

const ServicesSection = () => {
    return (
        <section className="bg-orange p-8 rounded-lg my-10">
            <h2 className="text-2xl font-bold mb-6 text-center text-white">
                خدمات شركة فاين كلين للخدمات المتكاملة
            </h2>
            <h3 className="text-xl font-bold mb-6 text-center text-white"> (نظافة المباني- صيانة المكيفات- رشد المبيدات - عزل الخزنات- نقل اثاث)</h3>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className="bg-gradient-to-br from-orange-400 to-orange-600 text-white p-5 rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-105"
                    >
                        <div className="flex items-center gap-3 mb-3">
                            {service.icon}
                            <h3 className="text-lg font-bold">{service.title}</h3>
                        </div>
                        <ul className="list-disc list-inside space-y-1 text-sm">
                            {service.items.map((item, idx) => (
                                <li key={idx}>{item}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            {/* زر اطلب الآن */}
            <div className="mt-8 flex justify-center">
                <button className="bg-orange hover:scale-100 w-40 h-16 text-white shadow-white font-bold py-3 px-8 rounded-full shadow-md hover:bg-yellow-400 transition-all text-lg md:text-xl">
                    اطلب الآن
                </button>
            </div>
        </section>
    );
};

export default ServicesSection;
