'use client';

import { useState, useRef } from 'react';
import { useParams } from 'next/navigation';

import { useReactToPrint } from 'react-to-print';

import Content from '@/components/Khutba/Content';
import ControlButtons from '@/components/Khutba/ControlButtons';

interface Props {
  khutba: {
    id: string;
    title: string;
    firstPart: string;
    secondPart: string;
    createdAt: Date;
    author: string | null;
    description: string;
    categoryId: string;
    thumbnailPath: string;
  } | null;
}

const Khutba = ({ khutba }: Props) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [isShortKhutbaChecked, setIsShortKhutbaChecked] =
    useState<boolean>(false);
  const [isMediumKhutbaChecked, setIsMediumKhutbaChecked] =
    useState<boolean>(false);
  const [isLongKhutbaChecked, setIsLongKhutbaChecked] =
    useState<boolean>(false);
  const [isHighContrastChecked, setIsHighContrastChecked] =
    useState<boolean>(false);

  const [khutbaContentFontSize, setKhutbaContentFontSize] = useState<number>(0);

  const params = useParams<{ id: string }>();

  const componentRef = useRef(null);
  const handlePrint = useReactToPrint({
    contentRef: componentRef,
  });

  const paddingClassNames = 'px-8 md:px-[100px]';

  return (
    <>
      <div className="py-24 pt-8 md:pt-14">
        {!loading ? (
          error ? (
            <p
              className={`${paddingClassNames} text-black font-bold text-xl mt-3`}
            >
              There has been an error. Please try again later.
            </p>
          ) : (
            khutba && (
              <>
                <ControlButtons
                  handlePrint={handlePrint}
                  isShortKhutbaChecked={isShortKhutbaChecked}
                  isMediumKhutbaChecked={isMediumKhutbaChecked}
                  isLongKhutbaChecked={isLongKhutbaChecked}
                  isHighContrastChecked={isHighContrastChecked}
                  setIsShortKhutbaChecked={setIsShortKhutbaChecked}
                  setIsMediumKhutbaChecked={setIsMediumKhutbaChecked}
                  setIsLongKhutbaChecked={setIsLongKhutbaChecked}
                  setIsHighContrastChecked={setIsHighContrastChecked}
                  setKhutbaContentFontSize={setKhutbaContentFontSize}
                  khutbaContentFontSize={khutbaContentFontSize}
                  paddingClassNames={paddingClassNames}
                />
                <Content
                  paddingClassNames={paddingClassNames}
                  componentRef={componentRef}
                  isShortKhutbaChecked={isShortKhutbaChecked}
                  isMediumKhutbaChecked={isMediumKhutbaChecked}
                  isLongKhutbaChecked={isLongKhutbaChecked}
                  isHighContrastChecked={isHighContrastChecked}
                  title={khutba?.title}
                  firstPart={khutba?.firstPart}
                  secondPart={khutba?.secondPart}
                  khutbaContentFontSize={khutbaContentFontSize}
                />
              </>
            )
          )
        ) : (
          <p
            className={`${paddingClassNames} text-black font-bold text-xl mt-3`}
          >
            Loading ...
          </p>
        )}
      </div>
    </>
  );
};

export default Khutba;
