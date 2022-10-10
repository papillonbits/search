import { primer } from '@papillonbits/components'
import { Navigator } from '../../molecule/Navigator'
import { defaultProps, propTypes } from './ListCarTemplate.prop'
import { useListCarState } from './ListCarTemplate.hook'
import styles from './ListCarTemplate.scss'

const {
  container,
  alert,
  content,
  contentDisplay,
  contentDisplaySearch,
  contentDisplaySearchPart,
  contentDisplaySearchPartField,
  contentDisplaySearchPartFieldInput,
  contentDisplaySearchPartFieldLabel,
  contentDisplaySearchPartFieldSelect,
  contentDisplayGridListCars,
  contentDisplayPagination,
} = styles

export function ListCarTemplate() {
  const {
    Alert: { Alert, alertVariant },
    Button: { Button, buttonVariant, iconAlignment, buttonState },
    Form: {
      Input: { Input, inputState },
    },
    Grid: { FlexGrid, flexGridSelection, flexGridState },
    Icon: { iconName },
    Label,
    Pagination: { PreviousNext, previousNextState },
    Select: { Select, selectState },
  } = primer

  const {
    alertTextListCars,
    pageContent: {
      listCar: { subheadHeadingLeft, subheadHeadingRight },
    },
    progress,
    currentPage,
    sort,
    search,
    paginatedRandomCarsObjectsNamesValues,
    isSearchEnabled,
    searchBrandOnChange,
    searchModelOnChange,
    searchYearOnChange,
    searchLicenseOnChange,
    searchLicenseOnKeyUp,
    searchLicenseOnFocus,
    searchLicenseOnBlur,
    paginationOnClick,
    carsObjectsFlexGridOnChange,
    carsObjectsFlexGridOnClick,
    searchCarsButtonOnClick,
  } = useListCarState()

  return (
    <div className={container}>
      <Alert className={alert} variant={progress.message.type} consent={progress?.consent}>
        {progress.message.text}
      </Alert>
      <Navigator headingLeft={subheadHeadingLeft} headingRight={subheadHeadingRight} />
      <div className={content}>
        <div className={contentDisplay}>
          <div className={contentDisplaySearch}>
            <div className={contentDisplaySearchPart}>
              <div className={contentDisplaySearchPartField}>
                <Label className={contentDisplaySearchPartFieldLabel} text="Brand:" />
                <Select
                  id="S1"
                  className={contentDisplaySearchPartFieldSelect}
                  selectedText={search?.brand?.find(({ isSelected }) => isSelected === true)?.text}
                  items={search?.brand}
                  onChange={searchBrandOnChange}
                  state={progress.isLoading ? selectState.inactive : selectState.active}
                />
              </div>
              <div className={contentDisplaySearchPartField}>
                <Label className={contentDisplaySearchPartFieldLabel} text="Model:" />
                <Select
                  id="S2"
                  className={contentDisplaySearchPartFieldSelect}
                  selectedText={search?.model?.find(({ isSelected }) => isSelected === true)?.text}
                  items={search?.model}
                  onChange={searchModelOnChange}
                  state={progress.isLoading ? selectState.inactive : selectState.active}
                />
              </div>
            </div>
            <div className={contentDisplaySearchPart}>
              <div className={contentDisplaySearchPartField}>
                <Label className={contentDisplaySearchPartFieldLabel} text="Keywords:" />
                <Input
                  id="T"
                  value={search.license || ''}
                  className={contentDisplaySearchPartFieldInput}
                  placeholder="Type license plate and press Enter to search. Press ESC to clear."
                  ariaAttr={{ label: 'Type in license plate' }}
                  onChange={searchLicenseOnChange}
                  onKeyUp={searchLicenseOnKeyUp}
                  onFocus={searchLicenseOnFocus}
                  onBlur={searchLicenseOnBlur}
                  state={progress.isLoading ? inputState.inactive : inputState.active}
                />
              </div>
              <div className={contentDisplaySearchPartField}>
                <Label className={contentDisplaySearchPartFieldLabel} text="Year:" />
                <Select
                  id="S3"
                  className={contentDisplaySearchPartFieldSelect}
                  selectedText={search?.year?.find(({ isSelected }) => isSelected === true)?.text}
                  items={search?.year}
                  onChange={searchYearOnChange}
                  state={progress.isLoading ? selectState.inactive : selectState.active}
                />
              </div>
            </div>
          </div>
          <Button
            id="B"
            text="Search Cars"
            icon={{ alignment: iconAlignment.left, name: iconName.Search16 }}
            variant={buttonVariant.primary}
            onClick={searchCarsButtonOnClick}
            state={isSearchEnabled ? buttonState.active : buttonState.inactive}
          />
          {paginatedRandomCarsObjectsNamesValues?.length === 0 && (
            <Alert className={alert} variant={alertVariant.warning}>
              {alertTextListCars.display.noCars}
            </Alert>
          )}
          <PreviousNext
            className={contentDisplayPagination}
            ariaAttr={{ label: 'Pagination Top' }}
            currentPage={currentPage}
            onClick={paginationOnClick}
            state={progress.isLoading ? previousNextState.inactive : previousNextState.active}
          />
          <FlexGrid
            className={contentDisplayGridListCars}
            items={paginatedRandomCarsObjectsNamesValues}
            idIndex={0}
            isSelectedIndex={1}
            selection={flexGridSelection.checkbox}
            sort={sort}
            onChange={carsObjectsFlexGridOnChange}
            onClick={carsObjectsFlexGridOnClick}
            onDoubleClick={() => {}}
            state={progress.isLoading ? flexGridState.inactive : flexGridState.active}
          />
          <PreviousNext
            className={contentDisplayPagination}
            ariaAttr={{ label: 'Pagination Bottom' }}
            currentPage={currentPage}
            onClick={paginationOnClick}
            state={progress.isLoading ? previousNextState.inactive : previousNextState.active}
          />
        </div>
      </div>
      <Alert className={alert} variant={progress.message.type} consent={progress?.consent}>
        {progress.message.text}
      </Alert>
    </div>
  )
}

ListCarTemplate.defaultProps = defaultProps

ListCarTemplate.propTypes = propTypes
