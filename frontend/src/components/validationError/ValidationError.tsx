import { ErrorMessage, useField } from 'formik';
import { FC } from 'react';

type ValidationErrorProps = {
   fieldName: string;
   component?: string;
   className?: string;
};

export const ValidationError: FC<ValidationErrorProps> = ({
   fieldName,
   component,
   className,
}) => {
   const [field, meta] = useField(fieldName);

   const { error, touched } = meta;
   return (
      <>
         {error && touched && (
            <ErrorMessage
               name={field.name}
               component={component}
               className={className}
            />
         )}
      </>
   );
};
