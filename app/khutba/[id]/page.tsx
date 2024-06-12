'use client';

import { useState, useRef } from 'react';

import { useReactToPrint } from 'react-to-print';

import Content from '@/components/Khutba/Content';
import ControlButtons from '@/components/Khutba/ControlButtons';

const Khutba = () => {
	const [isShortKhutbaChecked, setIsShortKhutbaChecked] =
		useState<boolean>(false);
	const [isMediumKhutbaChecked, setIsMediumKhutbaChecked] =
		useState<boolean>(false);
	const [isLongKhutbaChecked, setIsLongKhutbaChecked] =
		useState<boolean>(false);

	const componentRef = useRef(null);
	const handlePrint = useReactToPrint({
		content: () => componentRef.current,
	});

	const paddingClassNames = 'px-8 md:px-[100px]';

	return (
		<>
			<div className='py-24 pt-20'>
				<ControlButtons
					handlePrint={handlePrint}
					isShortKhutbaChecked={isShortKhutbaChecked}
					isMediumKhutbaChecked={isMediumKhutbaChecked}
					isLongKhutbaChecked={isLongKhutbaChecked}
					setIsShortKhutbaChecked={setIsShortKhutbaChecked}
					setIsMediumKhutbaChecked={setIsMediumKhutbaChecked}
					setIsLongKhutbaChecked={setIsLongKhutbaChecked}
					paddingClassNames={paddingClassNames}
				/>
				<Content
					paddingClassNames={paddingClassNames}
					componentRef={componentRef}
					isShortKhutbaChecked={isShortKhutbaChecked}
					isMediumKhutbaChecked={isMediumKhutbaChecked}
					isLongKhutbaChecked={isLongKhutbaChecked}
					title='Wudu - Its Secrets and Rewards'
					firstPart='Allah created life as a test and the test is to worship Allah. Allah says
,وَمَا خَلَقْتُ الْجِنَّ وَالْإِنسَ إِلَّا لِيَعْبُدُونِ
"And I did not create the jinn and mankind except to worship Me”. [51:56]

In a verse from Surah Mulk, Allah gives more information about the test by saying
,الَّذِي خَلَقَ الْمَوْتَ وَالْحَيَاةَ لِيَبْلُوَكُمْ أَيُّكُمْ أَحْسَنُ عَمَلًا  
“[He] who created death and life to test you [as to] which of you is best in [their] deeds - and He is the Exalted in Might, the Forgiving”. [67:2]

So the test of life is to worship Allah and do the best deeds we can, so that we can present something to Allah on the Day of Judgement. Did Allah specify what the ‘best deeds’ are? No, Allah did not do that. Scholars say the reason behind this is that sometimes a deed can be more valuable depending on the situation; for example, we know that charity is a noble deed, but it increases in value when one gives charity during difficult times. Moreover, prayer is also a very righteous deed. It increases in value when one prays in a difficult situation. I ask Allah to reward you young brothers and sisters as you pray even though you are in a challenging environment. You pray even though lunch is very short. You pray even though it is difficult to do wudu. You brothers and sisters pray even though majority of the people in this school do not pray.

Going through difficulty is also part of the test of life and is also part of worshipping Allah. Allah tells us in the Qur’an that you will go through various forms of difficulty,
Allah says,
وَلَنَبْلُوَنَّكُم بِشَيْءٍ مِّنَ الْخَوْفِ وَالْجُوعِ وَنَقْصٍ مِّنَ الْأَمْوَالِ وَالْأَنفُسِ وَالثَّمَرَاتِ 
 وَبَشِّرِ الصَّابِرِينَ
“And We will surely test you with something of fear and hunger and a loss of wealth and lives and fruits, but give good tidings to the patient”. [2:155]

Just to help you understand this verse I will give you an analogy. We all know that we have to work very hard to do well in any test, whether the test is for maths, science, English or any other subject. In preparing for the test, we often find it hard learning all the topics, including certain topics which are very challenging – this period is a difficult time in our life. Similarly, to achieve Jannah we have to go through tests and difficulties, some which might stretch us to our limits.

What are some of the ways Allah tests us in life?

- Finding it enormously difficult to do well in your studies because of learning difficulties

- Having illnesses, which limit your ability to do things, including disability

- Parents separating

- Death in the family (e.g. sibling or a parent)

- Natural disaster, such as an earthquake or flood

Other tests may revolve around fear; for instance the fear of not fitting into a group of friends, or the fear of failing or fear of the future. Also, tests may relate to hunger whereby one delays his lunch in order to pray and one fasts in the month of Ramadan.

So how do we deal with the tests and trials of life? Number one, know that Allah tests those who He loves. “When Allah loves a people, He tests them”. [Tirmidhi]

If Allah tests you a lot, it doesn’t mean that He dislikes you; in fact it means Allah loves you. This is why the Messengers and Prophets of Allah went through the most tests. Allah made the Prophet Muhammed (ﷺ) go through a lot of tests and very difficult ones as well. The Prophet (ﷺ) lost both parents by the age of six, he was poor, he was physically, verbally and mentally harmed, he was driven out of his hometown, he had to endure extreme hunger and much more. Why did Allah put the Prophet (ﷺ) through so much difficulty? Because Allah loves the Prophet (ﷺ) and wanted to bring him closer to Himself. Making him endure these trials of life, made him turn to the only One who had the power to help him out of these situations. One cannot get closer to Allah by being lazy and not doing anything. One gets closer to Allah by worshipping Him in whatever situation one finds oneself in.

The second way one can deal with the tests and trials of life is to know that the test is temporary and therefore will not last forever. As a consequence of it being temporary know that the solution to your problem and comfort is coming. Allah gives us hope by saying,
إِنَّ مَعَ الْعُسْرِ يُسْرًا 
“Indeed, with every hardship will come ease”. [94:6]

So whilst we experience hardships we should never lose hope in Allah, as the situation will get better.'
					secondPart='lorem'
				/>
			</div>
		</>
	);
};

export default Khutba;
