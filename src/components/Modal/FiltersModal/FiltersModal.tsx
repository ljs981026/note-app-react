import { FaTimes } from 'react-icons/fa';
import { useAppDispatch } from '../../../hook/redux';
import { toggleFiltersModal } from '../../../store/modal/modalSlice';
import { DeleteBox, FixedContainer } from '../Modal.styles';
import { Box, Container, TopBox } from './FiltersModal.styles';

interface FilterModalProps {
  handleFilter: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleClear: () => void;
  filter: string;
}

const FiltersModal = ({ handleFilter, handleClear, filter }: FilterModalProps) => {
  const dispatch = useAppDispatch();
  return (
    <FixedContainer>
      <Container>
        <DeleteBox
          onClick={() => dispatch(toggleFiltersModal(false))}
          className="filters__close"
        >
          <FaTimes />
        </DeleteBox>
        <TopBox>
          <div className="filters__title">정렬</div>
          <small onClick={handleClear} className="filters__delete">
            CLEAR
          </small>
        </TopBox>
        <Box>
          <div className="filters__subtitle">PRIORITY</div>
          <div className="filters_check">
            <input
              type="radio"
              name="filter"
              value="low"
              id="low"
              checked={filter === 'low'}
              onChange={(e) => handleFilter(e)}
            />
            <label htmlFor="low"> Low to High</label>
          </div>
          <div className="filters_check">
            <input
              type="radio"
              name="filter"
              value="high"
              id="high"
              checked={filter === 'high'}
              onChange={(e) => handleFilter(e)}
            />
            <label htmlFor="high"> High to Low</label>
          </div>
        </Box>
        <Box>
          <div className="filters__subtitle">DATE</div>
          <div className="filters_check">
            <input
              type="radio"
              name="filter"
              value="latest"
              id="new"
              checked={filter === 'latest'}
              onChange={(e) => handleFilter(e)}
            />
            <label htmlFor="low"> Sort by Latest</label>
          </div>
          <div className="filters_check">
            <input
              type="radio"
              name="filter"
              value="created"
              id="created"
              checked={filter === 'created'}
              onChange={(e) => handleFilter(e)}
            />
            <label htmlFor="low"> Sort by Created</label>
          </div>
          <div className="filters_check">
            <input
              type="radio"
              name="filter"
              value="edited"
              id="edit"
              checked={filter === 'edited'}
              onChange={(e) => handleFilter(e)}
            />
            <label htmlFor="low"> Sort by Edited</label>
          </div>
        </Box>
      </Container>
    </FixedContainer>
  );
};

export default FiltersModal;
