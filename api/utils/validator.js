export const validator = (schema) => {
  return (req, res, next) => {
    const result = schema.safeParse(req.body);

    if (!result.success) {
      const errors = formatErrors(result.error.flatten().fieldErrors);
      return res.status(400).json({ errors });
    }

    req.validatedData = result.data;
    next();
  };
};

function formatErrors(fieldErrors) {
  const formatted = {};
  for (const key in fieldErrors) {
    if (fieldErrors[key]?.length) {
      formatted[key] = fieldErrors[key][0]; // show first error only
    }
  }
  return formatted;
}
