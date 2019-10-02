import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestion, faSpinner, faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames';

const CHECKING = 1;
const VALID = 2;
const INVALID = 3;
const PENDING = 4;

function determineType(props) {
  let { checking, valid, invalid } = props;

  // Pending
  if (checking == false && valid == false && invalid == false) {
    return PENDING;
  }

  // Checking
  if (checking == true && valid == false && invalid == false) {
    return CHECKING;
  }

  // Valid
  if (checking == false && valid == true && invalid == false) {
    return VALID;
  }

  // Invalid
  if (checking == false && valid == false && invalid == true) {
    return INVALID;
  }
}

function IconBox(props) {
  let currentType = determineType(props);

  let classes = classNames({
    'w-1/4': true,
    'p-5': true,
    'center': true,
    'flex': true,
    'justify-center': true,
    'text-4xl': true,
    'bg-gray-600': currentType == PENDING,
    'bg-gray-400': currentType == CHECKING,
    'bg-green-600': currentType == VALID,
    'bg-red-600': currentType == INVALID,
    'text-white': currentType == VALID || currentType == INVALID,
  });

  let icon = null;

  switch (currentType) {
    case CHECKING:
      icon = faSpinner;
      break;
    case PENDING:
      icon = faQuestion;
      break;
    case VALID:
      icon = faCheck;
      break;
    case INVALID:
      icon = faTimes;
      break;
  }


  return (
    <div className={classes}>
      <FontAwesomeIcon icon={icon} />
    </div>
  );
}

function StatusBox(props) {
  let currentType = determineType(props);

  let classes = classNames({
    'w-3/4': true,
    'text-2xl': true,
    'p-5': true,
    'bg-gray-400': currentType == PENDING,
    'bg-gray-100': currentType == CHECKING,
    'bg-green-300': currentType == VALID,
    'bg-red-300': currentType == INVALID,
  });

  return (
    <div className={classes}>
      CheckCard!
    </div>
  )
}

function CheckCard(props) {
  return (
    <div className="rounded overflow-hidden shadow-lg border border-gray-500 flex my-2">
      <IconBox {...props} />
      <StatusBox {...props} />
    </div>
  )
}

export default CheckCard;