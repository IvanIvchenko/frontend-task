import React, { useState } from 'react'
import { CustomButton } from 'components/theme/CustomButton/CustomButton';
import { CustomCheckbox } from 'components/theme/CustomCheckbox/CustomCheckbox';
import { CustomContainer } from 'components/theme/CustomContainer/CustomContainer';
import { CustomNumberInput } from 'components/theme/CustomNumberInput/CustomNumberInput';
import { CustomText } from 'components/theme/CustomText/CustomText';
import { SBrandsWrapper, SFiltersWrapper, SSeparatorLine, SSlider } from './Filters.styles';
import { IFiltersProps } from './Filters.types';

export const Filters: React.FC<IFiltersProps> = ({ brands, prices, onSubmit, onReset }) => {
  const [selectedBrands, setSelectedBrands] = useState<string[]>([])
  const [max, setMax] = useState(Math.max(...prices))
  const [min, setMin] = useState(Math.min(...prices))

  const handleOnSubmit = () => {
    onSubmit({max, min, brands: selectedBrands})
  }

  const handeCheckboxClick = (name: string) => {
    if (selectedBrands.includes(name)) {
      setSelectedBrands(selectedBrands.filter((brand) => brand !== name))
    } else {
      setSelectedBrands([...selectedBrands, name])
    }
  }

  const handleSliderChange = (value: [number, number]) => {
    setMin(Math.min(...value))
    setMax(Math.max(...value))
  }

  const handleResetClick = () => {
    setMax(Math.max(...prices))
    setMin(Math.min(...prices))
    setSelectedBrands([])
    onReset()
  }

  return (
      <SFiltersWrapper flexDirection='column' justifyContent='flex-start'>
        <SSeparatorLine />
        <CustomText marginBottom={25} fontWeight='strong'>
          Brands
        </CustomText>
        <SBrandsWrapper>
          {brands.map((brand) =>
            <CustomCheckbox onClick={() => handeCheckboxClick(brand)} checked={selectedBrands.includes(brand)}>
              {brand}
            </CustomCheckbox>
          )}
        </SBrandsWrapper>
        <SSeparatorLine />
        <CustomText marginBottom={25} fontWeight='strong'>
          Price Range
        </CustomText>
        <SSlider
          range
          max={Math.max(...prices)}
          min={Math.min(...prices)}
          step={10}
          onChange={handleSliderChange}
          value={[min, max]}
          defaultValue={[Math.min(...prices), Math.max(...prices)]}
        />
        <CustomContainer gap={8}>
          <CustomContainer flexDirection='column' marginBottom={10}>
            <CustomText marginBottom={5}>
              Min
            </CustomText>
              <CustomNumberInput
                value={min}
                max={max}
                min={Math.min(...prices)}
                onChange={(value) => setMin(Number(value))}
              />
          </CustomContainer>
          <CustomContainer flexDirection='column'>
            <CustomText marginBottom={5}>
              Max
            </CustomText>
              <CustomNumberInput
                value={max}
                min={min}
                max={Math.max(...prices)}
                onChange={(value) => setMax(Number(value))}
              />
          </CustomContainer>
        </CustomContainer>
        <CustomContainer
          width='100%'
          justifyContent='center'
          marginBottom={40}
        >
            <CustomButton buttonSize='small' textColor='blue' onClick={handleOnSubmit}>
              Apply
            </CustomButton>
        </CustomContainer>
        <CustomText
          cursorPointer
          textColor='blue'
          onClick={handleResetClick}
        >
          Reset filter
        </CustomText>
      </SFiltersWrapper>
  )
}