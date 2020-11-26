import React from 'react';

import * as S from './styles';

function Button({ children, ...props }) {
  return (
    <S.Container
      {...props}
    >
      {children}
    </S.Container>
  );
}

export default Button;