function ArrayMap(f, receiver) {
    CHECK_OBJECT_COERCIBLE(this, "Array.prototype.map");
  
    // Pull out the length so that modifications to the length in the
    // loop will not affect the looping and side effects are visible.
    var array = TO_OBJECT(this);
    var length = TO_LENGTH(array.length);
    if (!IS_CALLABLE(f)) throw %make_type_error(kCalledNonCallable, f);
    var result = ArraySpeciesCreate(array, length);
    for (var i = 0; i < length; i++) {
      if (i in array) {
        var element = array[i];
        %CreateDataProperty(result, i, %_Call(f, receiver, element, i, array));
      }
    }
    return result;
  }