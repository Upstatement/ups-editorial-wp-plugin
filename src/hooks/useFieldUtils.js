/**
 * @typedef {import("@wordpress/blocks").BlockEditProps} BlockEditProps
 */

/**
 * Custom hook for providing some block attribute utilities.
 *
 * @param {BlockEditProps['attributes']} attributesOrMeta the block attributes (or post meta)
 * @param {BlockEditProps['setAttributes']} setAttributesOrMeta a setter function to update
 * the attributes of a block (or post meta)
 */
const useFieldUtils = (attributesOrMeta, setAttributesOrMeta) => {
  /**
   * Helper factory for quickly creating `onChange` event handlers for elements
   * for given attributes.
   *
   * @example
   * <ToggleControl checked={attributes.isHidden} onChange={onChange('isHidden')} />
   *
   * @param {string} name the attribute or meta name to update
   * @returns {(value: any) => void} the `onChange` handler for an element
   */
  const onChange = name => value => {
    setAttributesOrMeta({
      [name]: value,
    });
  };

  /**
   * Helper function for quickly binding values and `onChange` handlers to elements.
   *
   * @example
   * <TextControl {...getFieldProps('description')} />
   * <ToggleControl {...getFieldProps('isHidden', 'checked')} />
   *
   * @param {string} name the attribute or meta name to apply
   * @param {string} [valueField="value"] the field to assign the value to (defaults to `value`)
   * @returns {{ [valueField: string]: string, onChange(value: any) => void }}
   */
  const getFieldProps = (name, valueField = 'value') => ({
    [valueField]: attributesOrMeta[name],
    onChange: onChange(name),
  });

  return { onChange, getFieldProps };
};

export default useFieldUtils;
