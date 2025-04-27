type ContainerProps = React.HTMLProps<HTMLDivElement>;

function Container({ children, className = "", ...props }: ContainerProps) {
  return (
    <div {...props} className={`max-w-[1000px] mx-auto px-2 py-4 ${className}`}>
      {children}
    </div>
  );
}

export default Container;
