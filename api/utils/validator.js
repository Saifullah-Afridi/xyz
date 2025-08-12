export const validator = (schema) => {
  return (req, res, next) => {
    const strictSchema = schema.strict();
    const result = strictSchema.safeParse(req.body);

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
      formatted[key] = fieldErrors[key][0];
    }
  }
  return formatted;
}
