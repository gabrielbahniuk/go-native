import { StyleSheet } from 'react-native';
import { metrics, colors } from 'styles';
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    padding: metrics.basePadding * 2,
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    textAlign: 'center',
    color: colors.white,
    fontSize: 24,
    fontWeight: 'bold',
  },
  text: {
    textAlign: 'center',
    marginTop: metrics.baseMargin,
    fontSize: 14,
    color: colors.light,
    lineHeight: 21,
  },
  error: {
    color: colors.danger,
    textAlign: 'center',
    marginTop: metrics.baseMargin,
  },
  headerSearch: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    backgroundColor: colors.white,
    borderRadius: metrics.baseRadius,
    height: 40,
    fontSize: 14,
    flex: 1,
    paddingHorizontal: metrics.basePadding,
  },
  button: {
    backgroundColor: colors.primary,
    borderRadius: metrics.baseRadius,
    height: 40,
    marginLeft: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: 14,
  },
});
export default styles;
