/* ************************************************************************

   qooxdoo - the new era of web development

   http://qooxdoo.org

   Copyright:
     2004-2008 1&1 Internet AG, Germany, http://www.1und1.de

   License:
     LGPL: http://www.gnu.org/licenses/lgpl.html
     EPL: http://www.eclipse.org/org/documents/epl-v10.php
     See the LICENSE file in the project's top-level directory for details.

   Authors:
     * Sebastian Werner (wpbasti)
     * Andreas Ecker (ecker)

************************************************************************ */

/**
 * A password input field, which hides the entered text.
 */
qx.Class.define("qx.ui.form.PasswordField",
{
  extend : qx.ui.form.TextField,

  members :
  {
    // overridden
    _createInputElement : function()
    {
      var input = new qx.html.Input("password");
      input.addListener("input", this._onHtmlInput, this);
      return input;
    },
    
    
    // overridden    
    _syncPlaceholder : function() 
    {
      this.base(arguments);
      
      var type = this.hasState("showingPlaceholder") ? "input" : "password";
      this.getContentElement().setAttribute("type", type);
    }
  }
});
