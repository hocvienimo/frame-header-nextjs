"use client";
import LabelButtonTag from '@/components/LabelButtonTag';
import { Button } from '@/components/ui/button';
import { HiBriefcase } from "react-icons/hi2";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/variants";

const howItWorksContent = {
    heading: {
        title: "Dịch vụ & Giải pháp iMovn Cung Cấp",
        description: "iMovn chuyên trong lãnh vực lập trình & thiết kế website, app mobile cùng các dịch vụ markekting online đa kênh. Với hơn 9 kinh nghiệm, chúng tối cam kết mang đến Quý khách hàng các giải pháp sáng tạo & hiệu quả nhất để thúc đẩy doanh nghiệp của bạn!"
    },

    workStep: [
        {
            number: '01',
            icon: HiBriefcase,
            title: "Thiết kế website",
            description: "Cấu trúc website chuẩn SEO theo checklist Google, sáng tạo, công nghệ thiết kế & lập trình web hiện đại như NEXTJS - REACTJS - WORDPRESS, responsive thiết bị di động, tiết kiệm chi phí khi chạy quảng cáo Google do sự tối ưu từ khóa được thêm vào trong thiết kế lập trình code web.",
            btn: {
                href: "/",
                label: "Xem chi tiết"
            }
        },

        {
            number: '02',
            icon: HiBriefcase,
            title: "Lập trình app mobile",
            description: "Mang đến cho bạn những giải pháp hiệu quả, không chỉ tập trung vào việc tạo ra giao diện người dùng hấp dẫn mà còn đảm bảo trải nghiệm người dùng tốt nhất. iMovn phát triển ứng dụng của bạn trên các nền tảng iOS & Android, đảm bảo tính tương thích và khả năng mở rộng app tối ưu.",
            btn: {
                href: "/",
                label: "Xem chi tiết"
            }
        },

        {
            number: '03',
            icon: HiBriefcase,
            title: "SEO tổng thể đa kênh",
            description: "Dịch vụ này của iMovn được thiết kế để tối ưu sự tiêp cận online trực tuyến của bạn, không chỉ trên Google mà trên tất cả nền tảng quan trọng khác. SEO tổng thể đa kênh không chỉ nâng cao thứ hạng còn tạo dựng thương hiệu mạnh mẻ & tiếp cận nhiều khách hàng tiềm năng hơn.",
            btn: {
                href: "/",
                label: "Xem chi tiết"
            }
        }
    ],

    smallServices: [
        {
            icon: HiBriefcase,
            title: "Phòng marketing online thuê ngoài",
            description: "Giải pháp Outsourced Marketing Department tối ưu cho các doanh nghiệp muốn tập trung chuyên môn & kinh nghiệm của đội ngũ marketing online đa kênh chuyên nghiệp mà không cần phải xây dụng & duy trì phòng ban nội bộ trong công ty",
            btn: {
                ref: "/",
                label: "Xem chi tiết"
            }
        },

        {
            icon: HiBriefcase,
            title: "Content SEO",
            description: "iMovn nghiên cứu đối thủ cạnh tranh cùng bạn để tìm ra các chủ đề đang triển khai và kết hợp nghiên cứu từ khóa để phân nhóm chủ đề mới. Triển khai content đa dạng, độc nhất và chuẩn SEO khi đăng lên website của bạn.",
            btn: {
                ref: "/",
                label: "Xem chi tiết"
            }
        },

        {
            icon: HiBriefcase,
            title: "Backlink entity",
            description: "Dịch vụ đi backlink entity của chúng tôi tập trung vào việc xây dụng các liên kết ngược chất lượng cao về web của bạn. Giúp tăng cường thứ hạng, độ uy tín & độ tin cậy với công cụ tìm kiếm & tiếp cận khách tiềm năng",
            btn: {
                ref: "/",
                label: "Xem chi tiết"
            }
        },

        {
            icon: HiBriefcase,
            title: "Langding Page",
            description: "Thiết kế một landing page chuyên nghiệp không chỉ đẹp còn mang tính logic hóa các vấn đề đưa vào landing page đúng trọng tâm. Tăng tỷ lệ chuyển đổi khí chạy quảng cáo Google, Facebook ads, tập trung vào mục tiêu cụ thể.",
            btn: {
                ref: "/",
                label: "Xem chi tiết"
            }
        }
    ]
}

const HowItWorks = () => {
  return (
    <section className='overflow-hidden'>
        <div className="container py-20 mx-auto">
            <div className="md:flex justify-center mb-20 md:mb-36">
                <div className="w-full md:w-9/12 md:flex gap-0 items-center">
                    <div className="md:w-5/12 mb-5 md:mb-0">
                        <LabelButtonTag text='Chúng tôi làm gì?' icon={HiBriefcase} />
                        <motion.h2
                        variants={fadeIn('right', 0.1)}
                        initial = 'hidden'
                        whileInView={'show'}
                        viewport={{ once:false, amount: 0.2 }}
                        >{howItWorksContent.heading.title}
                        </motion.h2>
                    </div>

                    <div className="md:w-7/12 self-end">
                        {howItWorksContent.heading.description && (
                            <motion.p
                            variants={fadeIn('left', 0.1)}
                            initial = 'hidden'
                            whileInView={'show'}
                            viewport={{ once:false, amount: 0.2 }}
                            >
                                {howItWorksContent.heading.description}
                            </motion.p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default HowItWorks