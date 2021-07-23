import React from 'react';
import styled from 'styled-components';

const BoxStyle = styled.div<{
  size?: string;
  margin?: string;
  color?: string;
  hoverColor?: string;
  display?: string;
}>`
  display: ${p => p.display};
  width: ${p => p.size};
  height: ${p => p.size};
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin: ${p => p.margin};
  color: ${p => p.color};
  &:hover {
    color: ${p => p.hoverColor};
  }
`;

const Box = ({
  children,
  size = 'inherit',
  margin = '',
  onClick = null,
  color = 'inherit',
  hoverColor = 'inherit',
  visible = true
}) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <BoxStyle
      size={size}
      margin={margin}
      onClick={() => handleClick()}
      color={color}
      hoverColor={hoverColor}
      display={visible ? 'flex' : 'none'}
    >
      {children}
    </BoxStyle>
  );
};

export const Cancel = ({
  size = '1rem',
  color = 'inherit',
  hoverColor = 'inherit',
  onClick = null,
  visible = true,
  margin = ''
}) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };
  return (
    <Box
      size={size}
      onClick={() => handleClick()}
      margin={margin}
      hoverColor={hoverColor}
      visible={visible}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        color={color}
        fill="currentColor"
        className="bi bi-clock"
        viewBox="0 0 16 16"
      >
        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
      </svg>
    </Box>
  );
};

export const Check = ({
  size = '1rem',
  color = 'inherit',
  hoverColor = 'inherit',
  onClick = null,
  visible = true,
  margin = ''
}) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };
  return (
    <Box
      size={size}
      onClick={() => handleClick()}
      margin={margin}
      hoverColor={hoverColor}
      visible={visible}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        color={color}
        fill="currentColor"
        className="bi bi-clock"
        viewBox="0 0 16 16"
      >
        <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />{' '}
      </svg>
    </Box>
  );
};

export const ChevronDown = ({
  size = '1rem',
  color = 'inherit',
  hoverColor = 'inherit',
  onClick = null,
  visible = true,
  margin = ''
}) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };
  return (
    <Box
      size={size}
      onClick={() => handleClick()}
      margin={margin}
      hoverColor={hoverColor}
      visible={visible}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        color={color}
        fill="currentColor"
        className="bi bi-clock"
        viewBox="0 0 16 16"
      >
        <path
          fillRule="evenodd"
          d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
        />
      </svg>
    </Box>
  );
};

export const ChevronUp = ({
  size = '1rem',
  color = 'inherit',
  hoverColor = 'inherit',
  onClick = null,
  visible = true,
  margin = ''
}) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };
  return (
    <Box
      size={size}
      onClick={() => handleClick()}
      margin={margin}
      hoverColor={hoverColor}
      visible={visible}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        color={color}
        fill="currentColor"
        className="bi bi-clock"
        viewBox="0 0 16 16"
      >
        <path
          fillRule="evenodd"
          d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
        />
      </svg>
    </Box>
  );
};

export const CompactChevronDown = ({
  size = '1rem',
  color = 'inherit',
  hoverColor = 'inherit',
  onClick = null,
  visible = true,
  margin = ''
}) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };
  return (
    <Box
      size={size}
      onClick={() => handleClick()}
      margin={margin}
      hoverColor={hoverColor}
      visible={visible}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        color={color}
        fill="currentColor"
        className="bi bi-clock"
        viewBox="0 0 16 16"
      >
        <path
          fillRule="evenodd"
          d="M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67z"
        />
      </svg>
    </Box>
  );
};

export const CompactChevronUp = ({
  size = '1rem',
  color = 'inherit',
  hoverColor = 'inherit',
  onClick = null,
  visible = true,
  margin = ''
}) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };
  return (
    <Box
      size={size}
      onClick={() => handleClick()}
      margin={margin}
      hoverColor={hoverColor}
      visible={visible}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        color={color}
        fill="currentColor"
        className="bi bi-clock"
        viewBox="0 0 16 16"
      >
        <path
          fillRule="evenodd"
          d="M7.776 5.553a.5.5 0 0 1 .448 0l6 3a.5.5 0 1 1-.448.894L8 6.56 2.224 9.447a.5.5 0 1 1-.448-.894l6-3z"
        />
      </svg>
    </Box>
  );
};

export const Gear = ({
  size = '1rem',
  color = 'inherit',
  hoverColor = 'inherit',
  onClick = null,
  visible = true,
  margin = ''
}) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };
  return (
    <Box
      size={size}
      onClick={() => handleClick()}
      margin={margin}
      hoverColor={hoverColor}
      visible={visible}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        color={color}
        fill="currentColor"
        className="bi bi-clock"
        viewBox="0 0 16 16"
      >
        <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z" />
        <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z" />
      </svg>
    </Box>
  );
};

export const Clock = ({
  size = '1rem',
  color = 'inherit',
  hoverColor = 'inherit',
  onClick = null,
  visible = true,
  margin = ''
}) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };
  return (
    <Box
      size={size}
      onClick={() => handleClick()}
      margin={margin}
      hoverColor={hoverColor}
      visible={visible}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        color={color}
        fill="currentColor"
        className="bi bi-clock"
        viewBox="0 0 16 16"
      >
        <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
        <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" />
      </svg>
    </Box>
  );
};

export const Folder = ({
  size = '1rem',
  color = 'inherit',
  hoverColor = 'inherit',
  onClick = null,
  visible = true,
  margin = ''
}) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };
  return (
    <Box
      size={size}
      onClick={() => handleClick()}
      margin={margin}
      hoverColor={hoverColor}
      visible={visible}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        color={color}
        fill="currentColor"
        className="bi bi-clock"
        viewBox="0 0 16 16"
      >
        <path d="M.54 3.87.5 3a2 2 0 0 1 2-2h3.672a2 2 0 0 1 1.414.586l.828.828A2 2 0 0 0 9.828 3h3.982a2 2 0 0 1 1.992 2.181l-.637 7A2 2 0 0 1 13.174 14H2.826a2 2 0 0 1-1.991-1.819l-.637-7a1.99 1.99 0 0 1 .342-1.31zM2.19 4a1 1 0 0 0-.996 1.09l.637 7a1 1 0 0 0 .995.91h10.348a1 1 0 0 0 .995-.91l.637-7A1 1 0 0 0 13.81 4H2.19zm4.69-1.707A1 1 0 0 0 6.172 2H2.5a1 1 0 0 0-1 .981l.006.139C1.72 3.042 1.95 3 2.19 3h5.396l-.707-.707z" />
      </svg>
    </Box>
  );
};

export const Person = ({
  size = '1rem',
  color = 'inherit',
  hoverColor = 'inherit',
  onClick = null,
  visible = true,
  margin = ''
}) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };
  return (
    <Box
      size={size}
      onClick={() => handleClick()}
      margin={margin}
      hoverColor={hoverColor}
      visible={visible}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        color={color}
        fill="currentColor"
        className="bi bi-clock"
        viewBox="0 0 16 16"
      >
        <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
      </svg>
    </Box>
  );
};

export const PersonPlus = ({
  size = '1rem',
  color = 'inherit',
  hoverColor = 'inherit',
  onClick = null,
  visible = true,
  margin = ''
}) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };
  return (
    <Box
      size={size}
      onClick={() => handleClick()}
      margin={margin}
      hoverColor={hoverColor}
      visible={visible}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        color={color}
        fill="currentColor"
        className="bi bi-clock"
        viewBox="0 0 16 16"
      >
        <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H1s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
        <path
          fillRule="evenodd"
          d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"
        />
      </svg>
    </Box>
  );
};

export const FolderPlus = ({
  size = '1rem',
  color = 'inherit',
  hoverColor = 'inherit',
  onClick = null,
  visible = true,
  margin = ''
}) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };
  return (
    <Box
      size={size}
      onClick={() => handleClick()}
      margin={margin}
      hoverColor={hoverColor}
      visible={visible}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        color={color}
        fill="currentColor"
        className="bi bi-clock"
        viewBox="0 0 16 16"
      >
        <path d="m.5 3 .04.87a1.99 1.99 0 0 0-.342 1.311l.637 7A2 2 0 0 0 2.826 14H9v-1H2.826a1 1 0 0 1-.995-.91l-.637-7A1 1 0 0 1 2.19 4h11.62a1 1 0 0 1 .996 1.09L14.54 8h1.005l.256-2.819A2 2 0 0 0 13.81 3H9.828a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 6.172 1H2.5a2 2 0 0 0-2 2zm5.672-1a1 1 0 0 1 .707.293L7.586 3H2.19c-.24 0-.47.042-.683.12L1.5 2.98a1 1 0 0 1 1-.98h3.672z" />
        <path d="M13.5 10a.5.5 0 0 1 .5.5V12h1.5a.5.5 0 1 1 0 1H14v1.5a.5.5 0 1 1-1 0V13h-1.5a.5.5 0 0 1 0-1H13v-1.5a.5.5 0 0 1 .5-.5z" />
      </svg>
    </Box>
  );
};

export const JournalPlus = ({
  size = '1rem',
  color = 'inherit',
  hoverColor = 'inherit',
  onClick = null,
  visible = true,
  margin = ''
}) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };
  return (
    <Box
      size={size}
      onClick={() => handleClick()}
      margin={margin}
      hoverColor={hoverColor}
      visible={visible}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        color={color}
        fill="currentColor"
        className="bi bi-clock"
        viewBox="0 0 16 16"
      >
        <path
          fillRule="evenodd"
          d="M8 5.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V10a.5.5 0 0 1-1 0V8.5H6a.5.5 0 0 1 0-1h1.5V6a.5.5 0 0 1 .5-.5z"
        />
        <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z" />
        <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z" />
      </svg>
    </Box>
  );
};


export const Journal = ({
  size = '1rem',
  color = 'inherit',
  hoverColor = 'inherit',
  onClick = null,
  visible = true,
  margin = ''
}) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };
  return (
    <Box
      size={size}
      onClick={() => handleClick()}
      margin={margin}
      hoverColor={hoverColor}
      visible={visible}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        color={color}
        fill="currentColor"
        className="bi bi-clock"
        viewBox="0 0 16 16"
      >
  <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z"/>
  <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z"/>
 </svg>
    </Box>
  );
};

export const Pen = ({
  size = '1rem',
  color = 'inherit',
  hoverColor = 'inherit',
  onClick = null,
  visible = true,
  margin = ''
}) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };
  return (
    <Box
      size={size}
      onClick={() => handleClick()}
      margin={margin}
      hoverColor={hoverColor}
      visible={visible}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        color={color}
        fill="currentColor"
        className="bi bi-clock"
        viewBox="0 0 16 16"
      >
        <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001zm-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708l-1.585-1.585z" />
      </svg>
    </Box>
  );
};

export const Phone = ({
  size = '1rem',
  color = 'inherit',
  hoverColor = 'inherit',
  onClick = null,
  visible = true,
  margin = ''
}) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };
  return (
    <Box
      size={size}
      onClick={() => handleClick()}
      margin={margin}
      hoverColor={hoverColor}
      visible={visible}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        color={color}
        fill="currentColor"
        className="bi bi-clock"
        viewBox="0 0 16 16"
      >
        <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
      </svg>
    </Box>
  );
};

export const Email = ({
  size = '1rem',
  color = 'inherit',
  hoverColor = 'inherit',
  onClick = null,
  visible = true,
  margin = ''
}) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };
  return (
    <Box
      size={size}
      onClick={() => handleClick()}
      margin={margin}
      hoverColor={hoverColor}
      visible={visible}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        color={color}
        fill="currentColor"
        className="bi bi-clock"
        viewBox="0 0 16 16"
      >
        <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z" />
      </svg>
    </Box>
  );
};

export const Reply = ({
  size = '1rem',
  color = 'inherit',
  hoverColor = 'inherit',
  onClick = null,
  visible = true,
  margin = ''
}) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };
  return (
    <Box
      size={size}
      onClick={() => handleClick()}
      margin={margin}
      hoverColor={hoverColor}
      visible={visible}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        color={color}
        fill="currentColor"
        className="bi bi-clock"
        viewBox="0 0 16 16"
      >
        <path d="M8.098 5.013a.144.144 0 0 1 .202.134V6.3a.5.5 0 0 0 .5.5c.667 0 2.013.005 3.3.822.984.624 1.99 1.76 2.595 3.876-1.02-.983-2.185-1.516-3.205-1.799a8.74 8.74 0 0 0-1.921-.306 7.404 7.404 0 0 0-.798.008h-.013l-.005.001h-.001L8.8 9.9l-.05-.498a.5.5 0 0 0-.45.498v1.153c0 .108-.11.176-.202.134L4.114 8.254a.502.502 0 0 0-.042-.028.147.147 0 0 1 0-.252.497.497 0 0 0 .042-.028l3.984-2.933zM9.3 10.386c.068 0 .143.003.223.006.434.02 1.034.086 1.7.271 1.326.368 2.896 1.202 3.94 3.08a.5.5 0 0 0 .933-.305c-.464-3.71-1.886-5.662-3.46-6.66-1.245-.79-2.527-.942-3.336-.971v-.66a1.144 1.144 0 0 0-1.767-.96l-3.994 2.94a1.147 1.147 0 0 0 0 1.946l3.994 2.94a1.144 1.144 0 0 0 1.767-.96v-.667z" />
        <path d="M5.232 4.293a.5.5 0 0 0-.7-.106L.54 7.127a1.147 1.147 0 0 0 0 1.946l3.994 2.94a.5.5 0 1 0 .593-.805L1.114 8.254a.503.503 0 0 0-.042-.028.147.147 0 0 1 0-.252.5.5 0 0 0 .042-.028l4.012-2.954a.5.5 0 0 0 .106-.699z" />
      </svg>
    </Box>
  );
};

export const CheckList = ({
  size = '1rem',
  color = 'inherit',
  hoverColor = 'inherit',
  onClick = null,
  visible = true,
  margin = ''
}) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };
  return (
    <Box
      size={size}
      onClick={() => handleClick()}
      margin={margin}
      hoverColor={hoverColor}
      visible={visible}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        color={color}
        fill="currentColor"
        className="bi bi-clock"
        viewBox="0 0 16 16"
      >
        <path
          fillRule="evenodd"
          d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3.854 2.146a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708L2 3.293l1.146-1.147a.5.5 0 0 1 .708 0zm0 4a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708L2 7.293l1.146-1.147a.5.5 0 0 1 .708 0zm0 4a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 0 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0z"
        />
      </svg>
    </Box>
  );
};

export const CashCoin = ({
  size = '1rem',
  color = 'inherit',
  hoverColor = 'inherit',
  onClick = null,
  visible = true,
  margin = ''
}) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };
  return (
    <Box
      size={size}
      onClick={() => handleClick()}
      margin={margin}
      hoverColor={hoverColor}
      visible={visible}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        color={color}
        fill="currentColor"
        className="bi bi-clock"
        viewBox="0 0 16 16"
      >
        <path
          fillRule="evenodd"
          d="M11 15a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm5-4a5 5 0 1 1-10 0 5 5 0 0 1 10 0z"
        />
        <path d="M9.438 11.944c.047.596.518 1.06 1.363 1.116v.44h.375v-.443c.875-.061 1.386-.529 1.386-1.207 0-.618-.39-.936-1.09-1.1l-.296-.07v-1.2c.376.043.614.248.671.532h.658c-.047-.575-.54-1.024-1.329-1.073V8.5h-.375v.45c-.747.073-1.255.522-1.255 1.158 0 .562.378.92 1.007 1.066l.248.061v1.272c-.384-.058-.639-.27-.696-.563h-.668zm1.36-1.354c-.369-.085-.569-.26-.569-.522 0-.294.216-.514.572-.578v1.1h-.003zm.432.746c.449.104.655.272.655.569 0 .339-.257.571-.709.614v-1.195l.054.012z" />
        <path d="M1 0a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h4.083c.058-.344.145-.678.258-1H3a2 2 0 0 0-2-2V3a2 2 0 0 0 2-2h10a2 2 0 0 0 2 2v3.528c.38.34.717.728 1 1.154V1a1 1 0 0 0-1-1H1z" />
        <path d="M9.998 5.083 10 5a2 2 0 1 0-3.132 1.65 5.982 5.982 0 0 1 3.13-1.567z" />
      </svg>
    </Box>
  );
};

export const Flag = ({
  size = '1rem',
  color = 'inherit',
  hoverColor = 'inherit',
  onClick = null,
  visible = true,
  margin = ''
}) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };
  return (
    <Box
      size={size}
      onClick={() => handleClick()}
      margin={margin}
      hoverColor={hoverColor}
      visible={visible}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        color={color}
        fill="currentColor"
        className="bi bi-clock"
        viewBox="0 0 16 16"
      >
        <path d="M14.778.085A.5.5 0 0 1 15 .5V8a.5.5 0 0 1-.314.464L14.5 8l.186.464-.003.001-.006.003-.023.009a12.435 12.435 0 0 1-.397.15c-.264.095-.631.223-1.047.35-.816.252-1.879.523-2.71.523-.847 0-1.548-.28-2.158-.525l-.028-.01C7.68 8.71 7.14 8.5 6.5 8.5c-.7 0-1.638.23-2.437.477A19.626 19.626 0 0 0 3 9.342V15.5a.5.5 0 0 1-1 0V.5a.5.5 0 0 1 1 0v.282c.226-.079.496-.17.79-.26C4.606.272 5.67 0 6.5 0c.84 0 1.524.277 2.121.519l.043.018C9.286.788 9.828 1 10.5 1c.7 0 1.638-.23 2.437-.477a19.587 19.587 0 0 0 1.349-.476l.019-.007.004-.002h.001" />
      </svg>
    </Box>
  );
};

export const ExclamationTriangle = ({
  size = '1rem',
  color = 'inherit',
  hoverColor = 'inherit',
  onClick = null,
  visible = true,
  margin = ''
}) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };
  return (
    <Box
      size={size}
      onClick={() => handleClick()}
      margin={margin}
      hoverColor={hoverColor}
      visible={visible}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        color={color}
        fill="currentColor"
        className="bi bi-clock"
        viewBox="0 0 16 16"
      >
        <path d="M7.938 2.016A.13.13 0 0 1 8.002 2a.13.13 0 0 1 .063.016.146.146 0 0 1 .054.057l6.857 11.667c.036.06.035.124.002.183a.163.163 0 0 1-.054.06.116.116 0 0 1-.066.017H1.146a.115.115 0 0 1-.066-.017.163.163 0 0 1-.054-.06.176.176 0 0 1 .002-.183L7.884 2.073a.147.147 0 0 1 .054-.057zm1.044-.45a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566z" />
        <path d="M7.002 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 5.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995z" />
      </svg>
    </Box>
  );
};

export const Speedometer = ({
  size = '1rem',
  color = 'inherit',
  hoverColor = 'inherit',
  onClick = null,
  visible = true,
  margin = ''
}) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };
  return (
    <Box
      size={size}
      onClick={() => handleClick()}
      margin={margin}
      hoverColor={hoverColor}
      visible={visible}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        color={color}
        fill="currentColor"
        className="bi bi-clock"
        viewBox="0 0 16 16"
      >

        <path d="M8 2a.5.5 0 0 1 .5.5V4a.5.5 0 0 1-1 0V2.5A.5.5 0 0 1 8 2zM3.732 3.732a.5.5 0 0 1 .707 0l.915.914a.5.5 0 1 1-.708.708l-.914-.915a.5.5 0 0 1 0-.707zM2 8a.5.5 0 0 1 .5-.5h1.586a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 8zm9.5 0a.5.5 0 0 1 .5-.5h1.5a.5.5 0 0 1 0 1H12a.5.5 0 0 1-.5-.5zm.754-4.246a.389.389 0 0 0-.527-.02L7.547 7.31A.91.91 0 1 0 8.85 8.569l3.434-4.297a.389.389 0 0 0-.029-.518z" />
        <path fillRule="evenodd" d="M6.664 15.889A8 8 0 1 1 9.336.11a8 8 0 0 1-2.672 15.78zm-4.665-4.283A11.945 11.945 0 0 1 8 10c2.186 0 4.236.585 6.001 1.606a7 7 0 1 0-12.002 0z" />
      </svg>
    </Box>
  );
};

export const Play = ({
  size = '1rem',
  color = 'inherit',
  hoverColor = 'inherit',
  onClick = null,
  visible = true,
  margin = ''
}) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };
  return (
    <Box
      size={size}
      onClick={() => handleClick()}
      margin={margin}
      hoverColor={hoverColor}
      visible={visible}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        color={color}
        fill="currentColor"
        className="bi bi-clock"
        viewBox="0 0 16 16"
      >

        <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z" />
      </svg>
    </Box>
  );
};



export const Pause = ({
  size = '1rem',
  color = 'inherit',
  hoverColor = 'inherit',
  onClick = null,
  visible = true,
  margin = ''
}) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };
  return (
    <Box
      size={size}
      onClick={() => handleClick()}
      margin={margin}
      hoverColor={hoverColor}
      visible={visible}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        color={color}
        fill="currentColor"
        className="bi bi-clock"
        viewBox="0 0 16 16"
      >

<path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"/>
 </svg>
    </Box>
  );
};


export const Record = ({
  size = '1rem',
  color = 'inherit',
  hoverColor = 'inherit',
  onClick = null,
  visible = true,
  margin = ''
}) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };
  return (
    <Box
      size={size}
      onClick={() => handleClick()}
      margin={margin}
      hoverColor={hoverColor}
      visible={visible}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        color={color}
        fill="currentColor"
        className="bi bi-clock"
        viewBox="0 0 16 16"
      >

<path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path d="M11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
 </svg>
    </Box>
  );
};


export const Archive = ({
  size = '1rem',
  color = 'inherit',
  hoverColor = 'inherit',
  onClick = null,
  visible = true,
  margin = ''
}) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };
  return (
    <Box
      size={size}
      onClick={() => handleClick()}
      margin={margin}
      hoverColor={hoverColor}
      visible={visible}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        color={color}
        fill="currentColor"
        className="bi bi-clock"
        viewBox="0 0 16 16"
      >

<path d="M0 2a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v7.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 12.5V5a1 1 0 0 1-1-1V2zm2 3v7.5A1.5 1.5 0 0 0 3.5 14h9a1.5 1.5 0 0 0 1.5-1.5V5H2zm13-3H1v2h14V2zM5 7.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z"/>

 </svg>
    </Box>
  );
};


export const StopWatch = ({
  size = '1rem',
  color = 'inherit',
  hoverColor = 'inherit',
  onClick = null,
  visible = true,
  margin = ''
}) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };
  return (
    <Box
      size={size}
      onClick={() => handleClick()}
      margin={margin}
      hoverColor={hoverColor}
      visible={visible}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        color={color}
        fill="currentColor"
        className="bi bi-clock"
        viewBox="0 0 16 16"
      >

<path d="M8.5 5.6a.5.5 0 1 0-1 0v2.9h-3a.5.5 0 0 0 0 1H8a.5.5 0 0 0 .5-.5V5.6z"/>
  <path d="M6.5 1A.5.5 0 0 1 7 .5h2a.5.5 0 0 1 0 1v.57c1.36.196 2.594.78 3.584 1.64a.715.715 0 0 1 .012-.013l.354-.354-.354-.353a.5.5 0 0 1 .707-.708l1.414 1.415a.5.5 0 1 1-.707.707l-.353-.354-.354.354a.512.512 0 0 1-.013.012A7 7 0 1 1 7 2.071V1.5a.5.5 0 0 1-.5-.5zM8 3a6 6 0 1 0 .001 12A6 6 0 0 0 8 3z"/>

 </svg>
    </Box>
  );
};


export const LeftArrow = ({
  size = '1rem',
  color = 'inherit',
  hoverColor = 'inherit',
  onClick = null,
  visible = true,
  margin = ''
}) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };
  return (
    <Box
      size={size}
      onClick={() => handleClick()}
      margin={margin}
      hoverColor={hoverColor}
      visible={visible}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        color={color}
        fill="currentColor"
        className="bi bi-clock"
        viewBox="0 0 16 16"
      >

<path fillRule="evenodd" d="M9.224 1.553a.5.5 0 0 1 .223.67L6.56 8l2.888 5.776a.5.5 0 1 1-.894.448l-3-6a.5.5 0 0 1 0-.448l3-6a.5.5 0 0 1 .67-.223z"/>

 </svg>
    </Box>
  );
};


export const RightArrow = ({
  size = '1rem',
  color = 'inherit',
  hoverColor = 'inherit',
  onClick = null,
  visible = true,
  margin = ''
}) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };
  return (
    <Box
      size={size}
      onClick={() => handleClick()}
      margin={margin}
      hoverColor={hoverColor}
      visible={visible}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        color={color}
        fill="currentColor"
        className="bi bi-clock"
        viewBox="0 0 16 16"
      >

<path fillRule="evenodd" d="M6.776 1.553a.5.5 0 0 1 .671.223l3 6a.5.5 0 0 1 0 .448l-3 6a.5.5 0 1 1-.894-.448L9.44 8 6.553 2.224a.5.5 0 0 1 .223-.671z"/>

 </svg>
    </Box>
  );
};

export const DoubleRightArrow = ({
  size = '1rem',
  color = 'inherit',
  hoverColor = 'inherit',
  onClick = null,
  visible = true,
  margin = ''
}) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };
  return (
    <Box
      size={size}
      onClick={() => handleClick()}
      margin={margin}
      hoverColor={hoverColor}
      visible={visible}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        color={color}
        fill="currentColor"
        className="bi bi-clock"
        viewBox="0 0 16 16"
      >

<path fillRule="evenodd" d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708z"/>
  <path fillRule="evenodd" d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708z"/>

 </svg>
    </Box>
  );
};


export const Note = ({
  size = '1rem',
  color = 'inherit',
  hoverColor = 'inherit',
  onClick = null,
  visible = true,
  margin = ''
}) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };
  return (
    <Box
      size={size}
      onClick={() => handleClick()}
      margin={margin}
      hoverColor={hoverColor}
      visible={visible}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        color={color}
        fill="currentColor"
        className="bi bi-clock"
        viewBox="0 0 16 16"
      >
  <path d="M2.5 1A1.5 1.5 0 0 0 1 2.5v11A1.5 1.5 0 0 0 2.5 15h6.086a1.5 1.5 0 0 0 1.06-.44l4.915-4.914A1.5 1.5 0 0 0 15 8.586V2.5A1.5 1.5 0 0 0 13.5 1h-11zM2 2.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 .5.5V8H9.5A1.5 1.5 0 0 0 8 9.5V14H2.5a.5.5 0 0 1-.5-.5v-11zm7 11.293V9.5a.5.5 0 0 1 .5-.5h4.293L9 13.793z"/>

 </svg>
    </Box>
  );
};


export const Eye = ({
  size = '1rem',
  color = 'inherit',
  hoverColor = 'inherit',
  onClick = null,
  visible = true,
  margin = ''
}) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };
  return (
    <Box
      size={size}
      onClick={() => handleClick()}
      margin={margin}
      hoverColor={hoverColor}
      visible={visible}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        color={color}
        fill="currentColor"
        className="bi bi-clock"
        viewBox="0 0 16 16"
      >
  <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
  <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>

 </svg>
    </Box>
  );
};


export const HideEye = ({
  size = '1rem',
  color = 'inherit',
  hoverColor = 'inherit',
  onClick = null,
  visible = true,
  margin = ''
}) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };
  return (
    <Box
      size={size}
      onClick={() => handleClick()}
      margin={margin}
      hoverColor={hoverColor}
      visible={visible}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        color={color}
        fill="currentColor"
        className="bi bi-clock"
        viewBox="0 0 16 16"
      >
   <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"/>
  <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"/>
  <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z"/>

 </svg>
    </Box>
  );
};

export const ToggleOff = ({
  size = '1rem',
  color = 'inherit',
  hoverColor = 'inherit',
  onClick = null,
  visible = true,
  margin = ''
}) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };
  return (
    <Box
      size={size}
      onClick={() => handleClick()}
      margin={margin}
      hoverColor={hoverColor}
      visible={visible}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        color={color}
        fill="currentColor"
        className="bi bi-clock"
        viewBox="0 0 16 16"
      >
  <path d="M11 4a4 4 0 0 1 0 8H8a4.992 4.992 0 0 0 2-4 4.992 4.992 0 0 0-2-4h3zm-6 8a4 4 0 1 1 0-8 4 4 0 0 1 0 8zM0 8a5 5 0 0 0 5 5h6a5 5 0 0 0 0-10H5a5 5 0 0 0-5 5z"/>

 </svg>
    </Box>
  );
};

export const ToggleOn = ({
  size = '1rem',
  color = 'inherit',
  hoverColor = 'inherit',
  onClick = null,
  visible = true,
  margin = ''
}) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };
  return (
    <Box
      size={size}
      onClick={() => handleClick()}
      margin={margin}
      hoverColor={hoverColor}
      visible={visible}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        color={color}
        fill="currentColor"
        className="bi bi-clock"
        viewBox="0 0 16 16"
      >
  <path d="M5 3a5 5 0 0 0 0 10h6a5 5 0 0 0 0-10H5zm6 9a4 4 0 1 1 0-8 4 4 0 0 1 0 8z"/>

 </svg>
    </Box>
  );
};

export const AltToggleOff = ({
  size = '1rem',
  color = 'inherit',
  hoverColor = 'inherit',
  onClick = null,
  visible = true,
  margin = ''
}) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };
  return (
    <Box
      size={size}
      onClick={() => handleClick()}
      margin={margin}
      hoverColor={hoverColor}
      visible={visible}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        color={color}
        fill="currentColor"
        className="bi bi-clock"
        viewBox="0 0 16 16"
      >
  <path d="M9 11c.628-.836 1-1.874 1-3a4.978 4.978 0 0 0-1-3h4a3 3 0 1 1 0 6H9z"/>
  <path d="M5 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0 1A5 5 0 1 0 5 3a5 5 0 0 0 0 10z"/>

 </svg>
    </Box>
  );
};

export const AltToggleOn = ({
  size = '1rem',
  color = 'inherit',
  hoverColor = 'inherit',
  onClick = null,
  visible = true,
  margin = ''
}) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };
  return (
    <Box
      size={size}
      onClick={() => handleClick()}
      margin={margin}
      hoverColor={hoverColor}
      visible={visible}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        color={color}
        fill="currentColor"
        className="bi bi-clock"
        viewBox="0 0 16 16"
      >
  <path d="M7 5H3a3 3 0 0 0 0 6h4a4.995 4.995 0 0 1-.584-1H3a2 2 0 1 1 0-4h3.416c.156-.357.352-.692.584-1z"/>
  <path d="M16 8A5 5 0 1 1 6 8a5 5 0 0 1 10 0z"/>

 </svg>
    </Box>
  );
};

export const CalendarBlank = ({
  size = '1rem',
  color = 'inherit',
  hoverColor = 'inherit',
  onClick = null,
  visible = true,
  margin = ''
}) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };
  return (
    <Box
      size={size}
      onClick={() => handleClick()}
      margin={margin}
      hoverColor={hoverColor}
      visible={visible}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        color={color}
        fill="currentColor"
        className="bi bi-clock"
        viewBox="0 0 16 16"
      >
  <path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z"/>
  <path d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>


 </svg>
    </Box>
  );
};

export const InfoLetter = ({
  size = '1rem',
  color = 'inherit',
  hoverColor = 'inherit',
  onClick = null,
  visible = true,
  margin = ''
}) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };
  return (
    <Box
      size={size}
      onClick={() => handleClick()}
      margin={margin}
      hoverColor={hoverColor}
      visible={visible}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        color={color}
        fill="currentColor"
        className="bi bi-clock"
        viewBox="0 0 16 16"
      >
    <path d="m10.277 5.433-4.031.505-.145.67.794.145c.516.123.619.309.505.824L6.101 13.68c-.34 1.578.186 2.32 1.423 2.32.959 0 2.072-.443 2.577-1.052l.155-.732c-.35.31-.866.434-1.206.434-.485 0-.66-.34-.536-.939l1.763-8.278zm.122-3.673a1.76 1.76 0 1 1-3.52 0 1.76 1.76 0 0 1 3.52 0z"/>


 </svg>
    </Box>
  );
};

export const InfoCircle = ({
  size = '1rem',
  color = 'inherit',
  hoverColor = 'inherit',
  onClick = null,
  visible = true,
  margin = ''
}) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };
  return (
    <Box
      size={size}
      onClick={() => handleClick()}
      margin={margin}
      hoverColor={hoverColor}
      visible={visible}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        color={color}
        fill="currentColor"
        className="bi bi-clock"
        viewBox="0 0 16 16"
      >
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>


 </svg>
    </Box>
  );
};