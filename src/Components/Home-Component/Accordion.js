import { useState } from "react";
const Accordions = ({ title, content, paragraph, paragraph1, list, instruction }) => {
    const [isActive, setIsActive] = useState(false);

    return (
        <div className="ml-52 mr-52">
            <div className="mt-10 " onClick={() => setIsActive(!isActive)}>
                <div className="font-bold text-lg hover:bg-slate-100 p-3">{title}</div>
                <hr />
            </div>
            {isActive &&
                <div className="accordion-content">
                    <div className="ml-5 mt-2">{content}</div>
                    <div className="ml-5 mt-2">{paragraph}</div>
                    <div className="ml-5 mt-3">{paragraph1}</div>
                    <div className="ml-5">{instruction}</div>
                    <div className="ml-5 mt-2">
                        {
                            list !== undefined && list.map((l) => (
                                <ul>
                                    <li>{l}</li>
                                </ul>
                            ))
                        }
                    </div>
                </div>


            }
        </div>
    );
};

const Accordion = () => {

    const accordionData = [
        {
            title: 'How do I create a playlist?',
            content: `Playlists are a great way to save collections of music, either for your own listening or to share.`,
            instruction: "To create one:",

            list: [
                " 1. Tap Your Library.",
                " 2. Tap CREATE.",
                " 3. Give your playlist a name.",
                " 4. Start adding songs (and we'll help you along)."
            ],
        },
        {
            title: 'How do I activate Data Saver mode?',
            list: [
                "1. Tap Home",
                "2. Tap Settings",
                "3. Tap Data Saver",
                "4. Switch on Data Saver"],

        },
        {
            title: 'Is it only possible to shuffle play music',
            paragraph: `Any playlist with the shuffle icon will play on shuffle.`,
            paragraph1: `Some playlists won't have the shuffle icon, so you can tap any song to play it.`
        },
        {
            title: 'Where can I find Podcasts?',
            content: `Tap Search. Under Browse All, tap Podcasts.`
        }
    ];

    return (
        <>
            <div className="w-auto h-auto">
                <div className="text-center font-bold text-3xl mt-24">Got Questions ?</div>

                <div className="accordion">
                    {accordionData.map(({ title, content, paragraph, paragraph1, list, instruction }) => (
                        <Accordions
                            title={title}
                            content={content}
                            paragraph={paragraph}
                            paragraph1={paragraph1}
                            list={list}
                            instruction={instruction}
                        />
                    ))}
                </div>
            </div>
        </>
    );
}

export default Accordion;