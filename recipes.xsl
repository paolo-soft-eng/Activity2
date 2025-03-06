<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

    <!-- Root template to transform XML -->
    <xsl:template match="/">
        <html>
        <head>
            <title>Recipe Collection</title>
            <style>
                table { border-collapse: collapse; width: 100%; }
                th, td { border: 1px solid black; padding: 8px; text-align: left; }
                th { background-color: #f2f2f2; }
            </style>
        </head>
        <body>
            <h2>Recipe Collection</h2>

            <table>
                <tr>
                    <th>Recipe Title</th>
                    <th>Ingredients</th>
                    <th>Cooking Instructions</th>
                </tr>

                <!-- Loop through each recipe in XML -->
                <xsl:for-each select="recipes/recipe">
                    <tr>
                        <td><xsl:value-of select="recipeTitle"/></td>
                        <td>
                            <ul>
                                <xsl:for-each select="ingredients/ingredient">
                                    <li><xsl:value-of select="."/></li>
                                </xsl:for-each>
                            </ul>
                        </td>
                        <td><xsl:value-of select="cookingInstructions"/></td>
                    </tr>
                </xsl:for-each>
            </table>
        </body>
        </html>
    </xsl:template>

</xsl:stylesheet>
