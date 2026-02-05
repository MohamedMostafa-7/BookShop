// CarouselBooks.jsx
import React, { useRef, useEffect } from "react";

export default function CarouselBooks() {

    const booksData = [
        {
            id: 1,
            title: 'Rich Dad Poor Dad',
            image: '/public/images/Swiper/RICHDAD_POORDAD.png',
            author: 'Robert Kiyosaki'
        },
        {
            id: 2,
            title: 'The Design of Everyday Things',
            image: '/public/images/Swiper/THE_DESIGN_OF_EVERY_THINGS.jpg',
            author: 'Don Norman'
        },
        {
            id: 3,
            title: 'Power',
            image: '/public/images/Swiper/POWER.png',
            author: 'Author Name'
        },
        {
            id: 4,
            title: 'The Craft of Research',
            image: '/public/images/Swiper/TheCarftOfResearch.jpg',
            author: 'Author Name'
        },
        {
            id: 5,
            title: 'Design of Books',
            image: '/public/images/Swiper/TheDesign_of_Books.jpg',
            author: 'Debbie Berne'
        },
        {
            id: 6,
            title: 'Thinking, Fast and Slow',
            image: '/public/images/Swiper/Thinking,FastAndSlow.jpg',
            author: 'Daniel Kahneman'
        },
        {
            id: 7,
            title: 'The 7 Habits of Highly Effective People',
            image: '/public/images/Swiper/The7Habits.jpg',
            author: 'Stephen R. Covey'
        },
        {
            id: 8,
            title: 'Atomic Habits',
            image: '/public/images/Swiper/Atomic_Habits_An_Easy&Proven.jpg',
            author: 'James Clear'
        },
        {
            id: 9,
            title: 'Rage and the Republic',
            image: '/public/images/Swiper/Rage and the Republic.jpg',
            author: 'Author Name'
        },
        {
            id: 10,
            title: 'The Let Them Theory',
            image: '/public/images/Swiper/The_Let_Them_Theory.jpg',
            author: 'Mel Robbins'
        },
    ];

    // نضاعف الكتب عشان الحركة تكون مستمرة
    const duplicatedBooks = [...booksData, ...booksData];

    const sliderRef = useRef(null);
    const animationRef = useRef(null);

    // الحركة التلقائية
    useEffect(() => {
        const slider = sliderRef.current;
        let scrollAmount = 0;

        const autoScroll = () => {
            if (slider) {
                scrollAmount += 1.5; // سرعة الحركة
                slider.scrollLeft = scrollAmount;

                // لما نوصل للنص نرجع للبداية عشان اللوب
                if (scrollAmount >= slider.scrollWidth / 2) {
                    scrollAmount = 0;
                }
            }
            animationRef.current = requestAnimationFrame(autoScroll);
        };

        animationRef.current = requestAnimationFrame(autoScroll);

        return () => {
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
        };
    }, []);

    return (
        <div
            ref={sliderRef}
            className="w-full overflow-x-auto [&::-webkit-scrollbar]:hidden"
        >
            <div className="flex gap-8">
                {duplicatedBooks.map((book, index) => (
                    <div key={`${book.id}-${index}`} className="flex-[0_0_173px] h-[260px]">
                        <img
                            src={book.image}
                            alt={book.title}
                            className="w-full h-full object-cover rounded-lg select-none"
                            draggable="false"
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}